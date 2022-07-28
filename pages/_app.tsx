import "../styles/globals.css";
import { Layout } from "@components/common";

import { AppProps } from "next/app";
import { FC } from "react";
// interface Props {
//   children: React.ReactElement;
// }

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
