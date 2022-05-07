import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    // @ts-ignore
    return (
      <Html>
        <Head>
          <title>#gamigoween THE HAUNTING</title>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type='text/javascript'
            src='https://cdn.cookielaw.org/consent/a87c33ad-e94d-47cb-be30-c3d47029e52a/OtAutoBlock.js' ></script>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
            type='text/javascript'
            data-domain-script='a87c33ad-e94d-47cb-be30-c3d47029e52a' ></script>
          <script type='text/javascript'>
            function OptanonWrapper() { }
          </script>
          {/* OneTrust Cookies Consent Notice end for fantasy-town.com */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
