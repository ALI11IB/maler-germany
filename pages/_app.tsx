import "../styles/globals.css";
import { Layout } from "@components/common";

import { AppProps } from "next/app";
import { FC } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
// interface Props {
//   children: React.ReactElement;
// }
const theme = createTheme();
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
