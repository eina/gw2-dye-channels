import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>GW2 Dye Channels</title>
          
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
          <link rel="stylesheet" href="/_next/static/style.css" />

        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
