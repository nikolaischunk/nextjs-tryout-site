import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie_banner from "../components/CookieBanner";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Cookie_banner />   
        </div>
    );
}

export default Layout;