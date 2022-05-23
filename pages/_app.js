import "../styles/globals.scss";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Navbar />
      <Component {...pageProps} />
      {/* here maybe a footer? */}
    </div>
  );
}

export default MyApp;
