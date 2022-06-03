import Heading from "../../items/heading";
import Header from "../cpr_header";
import FAQ from "./faq_faq";
const Main = ({ title, content }) => {
    return (
        <div className="main container">
            {/* <Header /> */}
            <Heading heading="FAQ" subheading="Frequently asked Questions and answer about the topic Copyright." />
            <FAQ title={title} content={content} />
        </div>
    );
}

export default Main;