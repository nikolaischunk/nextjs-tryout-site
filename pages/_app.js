import "../styles/globals.scss";
import Layout from "../components/_Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
