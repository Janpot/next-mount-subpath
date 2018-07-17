# next-mount-subpath

Example showing SSR issue when mounting a Next.js app under a path.

Run
```
npm run dev
```
Then visit `http://localhost:3000/test` and check the console for

```
warning.js:33 Warning: Text content did not match. Server: "/" Client: "/test"
```
