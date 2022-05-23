import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Tryout from "../components/Tryout";
import "../styles/Home.module.scss";

export default function Home() {
  return (
    <div c  lassName="main-content">
      <Navbar />
      <div className="container">
        <Header />
        <Tryout />
      </div>
    </div>
  );
}
//write sfc for template export
