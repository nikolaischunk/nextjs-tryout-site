import Link from "next/link";
import Heading from "../../components/items/heading";

const copyright = () => {
  return (
    <div className="copyright container">
      <Heading
        heading="Copyright"
        subheading="Copyright is a legal right of a copyright owner to protect its work."
        divider="Copyright and Dataprotection"
      />
      <div className="columns">
        <div className="column">
          <Link href="/copyright/faq">
            <button className="button is-large is-fullwidth is-link is-outlined is-family-title">
              {" "}
              FAQ
            </button>
          </Link>
        </div>
        <div className="column">
          <Link href="/copyright/licenses">
            <button className="button is-large is-fullwidth is-link is-outlined is-family-title">
              {" "}
              LICENSES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default copyright;
