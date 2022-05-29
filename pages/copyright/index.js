import Main from "../../components/copyright/cpr_main";

const copyright = () => {
    let content = "Here is a list of all available Questions and Answers regarding the topic Copyright."
    return (<div className="copyright">
        <Main title="Start" content={content} />
    </div >);
}

export default copyright;