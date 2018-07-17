import { withRouter } from 'next/router';

const PathPrinter = withRouter(function ({ router }) {
  return (
    <div>
      <div>pathname: {router.pathname}</div>
      <div>asPath: {router.asPath}</div>
    </div>
  );
});

export default function Index () {
  return <PathPrinter />;
}
