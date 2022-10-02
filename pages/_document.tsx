import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class THSDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return <Page />;
  }
}

const Page = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width" />
      <meta name="apple-mobile-web-app-title" content="The Hateful Society" />
      <link rel="canonical" href="https://thehatefulsociety.com" />
      <meta property="og:url" content="https://thehatefulsociety.com" />

      <link rel="icon" href="/images/favicon.webp" />
      <meta property="og:title" content="The Hateful Society" key="title" />
      <meta
        name="keywords"
        content="thehatefulsociety, the, hateful, society, hate, hatehatehate, hypewear, brand, clothing, designer"
      />
      <meta name="description" content="hate hate hate" />
      <meta name="og:description" content="hate hate hate" />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/101979299?s=200&v=4"
      />
      <meta property="og:site_name" content="The Hateful Society" />
      <meta name="theme-color" content="#000000" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
