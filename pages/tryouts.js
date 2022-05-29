import Head from "next/head";
import Header from "../components/styleguide/Header";
import Tryout from "../components/Tryout";

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
