import "../styles/components/Navbar.module.scss";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isActive, setisActive] = useState(false);

  function handleBurgerToggle() {
    // if is active, set to false if not, set to true
    setisActive(!isActive);
  }

  return (
    <div>
      <nav
        className="navbar has-shadow is-primary mb-2"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
            <h1 className="navbar-logo is-size-4 is-logo">Nikolai</h1>
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-rollout"
            onClick={handleBurgerToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar-rollout"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/styleguide">
              <a className="navbar-item">Style Guide</a>
            </Link>
            <Link href="/animations">
              <a className="navbar-item">Animations</a>
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="">
                <a className="navbar-link">Media</a>
              </Link>
              <div className="navbar-dropdown">
                <Link href="/media/image">
                  <a className="navbar-item">Image</a>
                </Link>
                <Link href="/media/video">
                  <a className="navbar-item">Video</a>
                </Link>
                <Link href="/media/sound">
                  <a className="navbar-item">Audio</a>
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="/copyright">
                <a className="navbar-link">Copyright</a>
              </Link>

              <div className="navbar-dropdown">
                <Link href="/copyright/faq">
                  <a className="navbar-item">FAQ</a>
                </Link>
                <Link href="/copyright/licenses">
                  <a className="navbar-item">Licences</a>
                </Link>
              </div>
            </div>
            <Link href="/tryouts">
              <a className="navbar-item">Tryouts</a>
            </Link>
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
