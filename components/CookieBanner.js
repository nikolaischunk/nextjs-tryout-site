import { setCookies, getCookie, getCookies, removeCookies } from "cookies-next";
import React, { useState, useEffect } from "react";
import "../styles/components/CookieBanner.module.scss";

// setCookies('key', 'value', options);
// getCookies(options); // => { 'name1': 'value1', name2: 'value2' }
// removeCookies(name, options);

const Cookie_banner = () => {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    setAreCookiesAccepted(getCookie("cookies_accepted"));
  }, []);

  function setAcceptedCookies() {
    //get today date and add 7 days to the date
    const date = new Date();
    date.setDate(date.getDate() + 7);

    setCookies("cookies_accepted", true, { expires: date });
    setAreCookiesAccepted(true);
  }

  function removeCookiesAcception() {
    removeCookies("cookies_accepted");
    setAreCookiesAccepted(false);
  }

  function generateBanner() {
    if (areCookiesAccepted) {
      return (
        <div className="cookie-accepted ">
          <div className="notification is-danger is-light has-text-centered">
            <p>
              This website uses cookies.
              <strong> You have accepted the cookies</strong>
            </p>
            <div className="buttons is-centered">
              <button
                className="button is-danger is-outlined"
                onClick={() => {
                  removeCookiesAcception();
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="cookie-not-yet-accepted">
        <div className="notification is-primary is-light has-text-centered">
          <p>
            This website uses cookies. <strong>Not Accepted yet.</strong>
          </p>
          <div className="buttons is-centered">
            <button
              className="button is-success is-outlined"
              onClick={() => {
                setAcceptedCookies();
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-notification container">{generateBanner()}</div>
  );
};

export default Cookie_banner;
