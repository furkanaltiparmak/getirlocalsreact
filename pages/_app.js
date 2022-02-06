//Styles
import "../styles/globals.css";
//Components
import Layout from "../components/layout/layout";
//Redux Store
import store from "../store/store";
//Modules
import { Provider } from "react-redux";
//Next Modules
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
