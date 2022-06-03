let { faq } = require('../../../db/copyright_faq');
import Main from "../../../components/copyright/faq/faq_main";

export const getStaticProps = async ({ params }) => {
    //https://medium.com/swlh/next-js-usestaticprops-usestaticpaths-static-json-data-9f7903b8a5aa
    const questionList = faq.filter((q) => q.url === params.url);
    return {
        props: {
            question: faq.filter((q) => q.url === params.url)[0],
        },
    };
};
export const getStaticPaths = async () => {
    const paths = faq.map((q) => ({
        params: { url: q.url },
    }));
    return { paths, fallback: false };
};

const q = ({ question }) => {
    return (<div className="question">
        <Main title={question.question} content={question.answer} />
    </div>);
}

export default q;