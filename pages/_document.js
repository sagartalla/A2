import Document, { Head, Main, NextScript } from 'next/document';
import Meta from '../components/Meta';


export default class MyDocument extends Document {
  render() {
    const { props } = this;
    return (
      <html>
        <Head>
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
