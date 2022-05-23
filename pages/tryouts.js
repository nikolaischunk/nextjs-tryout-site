import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Tryout from "../components/Tryout";

const tryout = () => {
  return (
    <div className="main-content">
      <Navbar />
      <div className="container">
        <Header />
        <Tryout />
      </div>
    </div>
  );
};

export default tryout;
