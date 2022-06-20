import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie_banner from "../components/CookieBanner";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Cookie_banner />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
