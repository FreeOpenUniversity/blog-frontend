import '../styles/globals.css'
import '../assets/css/style.css'
import Head from "next/head";
import App from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta
        name="description"
        content="The Free Open University Project is a team of volunteer programmers committed to making university education free and open to all without restriction."
      />
      <meta name="author" content="CIS Team" />
      <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
    </Head>
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  </>
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
