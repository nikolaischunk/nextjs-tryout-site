import Header from "../../components/copyright/cpr_header";
import FAQ from "../../components/copyright/cpr_faq";
const Main = ({ title, content }) => {
    return (
        <div className="main">
            <Header />
            <FAQ title={title} content={content} />
        </div>
    );
}

export default Main;