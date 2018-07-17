const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  conf: {
    assetPrefix: `/test`
  }
});

app.prepare()
  .then(() => {
    const server = express();

    const handle = app.getRequestHandler();
    server.use('/test', (req, res) => {
      if (!/^\/(?:static|_next)\//.test(req.url)) {
        req.url = req.originalUrl;
      }
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
