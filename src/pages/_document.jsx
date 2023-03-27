import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />

          <>
            {/* // Portales: // NO BORRAR!!! */}
            <div id="modal"></div>
            <div id="alert"></div>
          </>

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument