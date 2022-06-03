import Heading from "../../items/heading";
import Card from "./license_card";
const Main = ({ title, content }) => {
    return (
        <div className="licenses">
            <Heading heading="Licenses" subheading="Licenses are a legal right of a copyright owner to protect its work." />
            <Card title={title} subtitle="" content={content} url="https://www.google.com" />
        </div>
    );
}

export default Main;