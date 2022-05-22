import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>The Hateful Society</title>
          <link rel="icon" href="/ths.svg" />
          <meta name="description" content="The Hateful Society" />
          <meta property="og:title" content="The Hateful Society" key="title" />
          <meta
            name="keywords"
            content="thehatefulsociety, the, hateful, society, hate, hatehatehate"
          />
          <meta name="description" content="The Hateful Society." />
          <meta name="og:description" content="The Hateful Society." />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/101979299?s=200&v=4"
          />
          <meta property="og:site_name" content="The Hateful Society" />
        </Head>
        <body className="bg-white dark:bg-black bg-[url('public/ths-black.svg')] dark:bg-[url('public/ths-white.svg')] bg-center bg-repeat">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
