import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie_banner from "../components/CookieBanner";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>
            <Cookie_banner />
            <Footer />
        </div>
    );
}

export default Layout;