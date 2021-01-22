import '../styles/globals.css'
import '../assets/css/style.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
