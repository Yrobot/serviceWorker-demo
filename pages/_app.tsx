import * as React from "react";
import Head from "next/head";

import "./global.css";

// tailwindcss 在其他css文件下引入，确保可以覆盖别的css样式
import "tailwindcss/tailwind.css";

// globel page config
// NO need to change in normal develop
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content="Next"></meta>
        <meta name="keywords" content="Next,Next"></meta>
        <meta name="author" content="https://yrobot.top"></meta>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
