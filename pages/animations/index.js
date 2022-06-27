import CSSAnimations from "../../components/animations/CSSAnimations";
import Link from "next/link";

import Heading from "../../components/items/heading";
const animations = () => {
  return (
    <div className="animations">
      <div className="container">
        <Heading
          heading="Animations"
          subheading="This is an Collection of Animations Styles"
          divider=" "
        />
        <div className="columns">
          <div className="column">
            <Link href="/animations/css">
              <button className="button is-large is-fullwidth is-link is-outlined is-family-title">
                CSS
              </button>
            </Link>
          </div>
          <div className="column">
            <Link href="/animations/gif">
              <button className="button is-large is-fullwidth is-link is-outlined is-family-title">
                GIF
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default animations;
