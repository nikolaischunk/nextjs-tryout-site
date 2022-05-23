import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Buttons from "../components/Buttons";

export default function Home() {
  return (
    <div className="main-content">
      <Navbar />
      <div className="container">
        <Main />
        <Buttons />
      </div>
    </div>

  );
}
//write sfc for template export
