import Divider from "../items/divider";
import Heading from "../items/heading";

const Header = () => {
    return (
        <div className="cpr_header container">
            <Heading heading="Copyright" subheading="Copyright is a legal right of a copyright owner to protect its work." />
            <Divider text="Copyright and Dataprotection" />
        </div>
    );
}

export default Header;