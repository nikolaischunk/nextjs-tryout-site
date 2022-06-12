import { setCookies, getCookie, getCookies, removeCookies } from 'cookies-next';

// setCookies('key', 'value', options);
// getCookies(options); // => { 'name1': 'value1', name2: 'value2' }
// removeCookies(name, options);

const Cookie_banner = () => {
    let isCookieAccepted = getCookie('cookie_accepted');
    console.log("isCookieAccepted", isCookieAccepted);

    return (
        <div className="cookie_banner">
            {/* Check if there is a cookie existent with the name "cookie_accepted"
        If it does not exist show a banner with a cookie message and a accept and deny button and a link to your privacy policy.
        If you click on accept set a cookie with the name "cookie_accepted" */}


            {!isCookieAccepted &&
                <div>
                    <p>
                        This website uses cookies. No cookie set.
                    </p>
                    <button onClick={() => {
                        setCookies('cookie_accepted', true);
                    }}>
                        Accept
                    </button>
                </div>
            }
            {isCookieAccepted &&
                <div>
                    <p>
                        This website uses cookies. You have accepted the cookies
                    </p>
                    <div class="buttons">
                        <button class='button is-success' onClick={() => {
                            removeCookies('cookie_accepted');
                        }}>
                            Remove
                        </button>
                        <button className="button is-primary is-outlined">Primary</button>
                    </div>
                </div>

            }
        </div>
    )
}

export default Cookie_banner;