import { withRouter } from 'next/router';
import React from 'react';

const PathPrinter = withRouter(function ({ router }) {
  return (
    <div>
      <div>pathname: {router.pathname}</div>
      <div>asPath: {router.asPath}</div>
    </div>
  );
});

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render () {
    return (
      <div>
        {this.props.userAgent}
        <PathPrinter />
      </div>
    );
  }
}
