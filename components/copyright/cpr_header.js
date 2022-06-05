import Divider from "../items/divider";
import Heading from "../items/heading";

const Header = () => {
    return (
        <div className="cpr_header">
            <Heading heading="Copyright" subheading="Copyright is a legal right of a copyright owner to protect its work." divider="Copyright and Dataprotection" />
        </div >
    );
}

export default Header;