import "../styles/globals.css";
import Layout from "../components/layout/layout";
import store from "../store/store";
import { Provider } from "react-redux";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Getir Locals App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
