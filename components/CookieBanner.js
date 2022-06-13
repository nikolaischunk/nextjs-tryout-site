import { setCookies, getCookie, getCookies, removeCookies } from "cookies-next";
import React, { useState, useEffect } from "react";

// setCookies('key', 'value', options);
// getCookies(options); // => { 'name1': 'value1', name2: 'value2' }
// removeCookies(name, options);

const Cookie_banner = () => {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  // useEffect(() => {
  //     setAreCookiesAccepted(getCookie('cookies_accepted'));
  // }, []);

  function setAcceptedCookies() {
    setCookies("cookies_accepted", true, { expires: 1 });
    setAreCookiesAccepted(true);
  }

  function removeCookiesAcception() {
    removeCookies("cookies_accepted");
    setAreCookiesAccepted(false);
  }

  function generateBanner() {
    if (areCookiesAccepted) {
      return (
        <div className="cookie-accepted">
          <p>This website uses cookies. You have accepted the cookies</p>
          <div class="buttons">
            <button
              class="button is-danger"
              onClick={() => {
                removeCookiesAcception();
              }}
            >
              Remove
            </button>
            <button className="button is-primary is-outlined">Primary</button>
          </div>
        </div>
      );
    }
    return (
      <div className="cookie-not-yet-accepted">
        <p>This website uses cookies. No cookie set.</p>

        <div class="buttons">
          <button
            class="button is-success"
            onClick={() => {
              setAcceptedCookies();
            }}
          >
            Accept
          </button>
          <button className="button is-primary is-outlined">Primary</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie_banner_component">
      <p>cookie banner</p>
      {generateBanner()}
    </div>
  );
};

export default Cookie_banner;
