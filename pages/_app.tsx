import React, { useEffect } from "react";
import Head from "next/head";

import { ENV, VERSION, NAME } from "common/envs";

import "./global.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    console.log(`ENV: ${ENV} \nversion: ${VERSION}`);
  }, []);
  return (
    <>
      <Head>
        <title>{NAME}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="author" content="http://yrobot.top"></meta>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
