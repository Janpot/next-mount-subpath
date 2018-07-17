import { withRouter } from 'next/router';
import Link from 'next/link';

const PathPrinter = withRouter(function ({ router }) {
  return (
    <div>
      <div>pathname: {router.pathname}</div>
      <div>asPath: {router.asPath}</div>
      <Link href='/some-page'>
        <a>Some Page</a>
      </Link>
    </div>
  );
});

export default function Index () {
  return <PathPrinter />;
}
