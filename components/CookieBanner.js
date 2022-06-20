import { setCookies, getCookie, getCookies, removeCookies } from "cookies-next";
import React, { useState, useEffect } from "react";

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
        <div className="cookie-accepted">
          <p>This website uses cookies. You have accepted the cookies</p>
          <div className="buttons">
            <button
              className="button is-danger"
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
        <div id="modal-js-example" class="modal is-active">
          <div class="modal-background"></div>

          <div class="modal-content">
            <div class="box">
              <p>Modal JS example</p>
              <p>This website uses cookies. No cookie set.</p>

              <div className="buttons">
                <button
                  className="button is-success"
                  onClick={() => {
                    setAcceptedCookies();
                  }}
                >
                  Accept
                </button>
                <button className="button is-primary is-outlined">
                  Learn more
                </button>
              </div>
            </div>
          </div>
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
