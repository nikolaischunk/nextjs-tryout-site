import "../styles/globals.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
