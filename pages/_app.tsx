import "../styles/globals.css";
import { Layout } from "@components/common";

import { AppProps } from "next/app";
import { FC } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "@rtk/store";
import { Provider } from "react-redux";
// interface Props {
//   children: React.ReactElement;
// }
const theme = createTheme();
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
