import Head from "next/head";
import Header from "../components/styleguide/Header";
import Navbar from "../components/styleguide/Navbar";
import Tryout from "../components/styleguide/Tryout";

const tryout = () => {
  return (
    <div className="main-content">
      <div className="container">
        <Header />
        <Tryout />
      </div>
    </div>
  );
};

export default tryout;
