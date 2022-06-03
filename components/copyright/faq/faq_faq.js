import Content from "./faq_content";
import Navigate from "./faq_navigate";

const FAQ = ({ title, subtitle, content }) => {

    return (
        <div className="cpr_faq container">
            <div className="columns">
                {/* <div className="column is-1"></div> */}
                <div className="column is-3">
                    <Navigate />
                </div >
                <div className="column">
                    <Content title={title} subtitle={subtitle} content={content} />
                </div>
            </div>
        </div>

    );
}

export default FAQ;
//https://bulma-divider.netlify.app/get-started/