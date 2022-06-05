import Heading from "../../items/heading";
import Card from "./license_card";
const Main = ({ title, url, content }) => {
    return (
        <div className="licenses container">
            <Heading heading="Licenses" subheading="Licenses are a legal right of a copyright owner to protect its work." />
            <Card title={title} url={url} content={content} />
        </div>
    );
}

export default Main;