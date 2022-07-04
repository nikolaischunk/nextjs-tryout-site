import Image from "next/image";

const Tryout = () => {
  return (
    <div>
      <div className="columns">
        <div className="column">
          <div className="password-card">
            <form className="box">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. alex@example.com"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>

              <button className="button is-primary">Sign in</button>
            </form>
          </div>
        </div>
        <div className="column">
          <div className="card-tryout">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <Image
                      src="https://bulma.io/images/placeholders/128x128.png"
                      alt="Image"
                      width="128px"
                      height="128px"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                      <small>31m</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tryout;
