import Heading from "../../items/heading";
import FAQ from "./faq_faq";
const Main = ({ title, content }) => {
  return (
    <div className="main container">
      <Heading
        header="FAQ"
        subheader="Frequently asked Questions and answer about the topic Copyright."
      />
      <FAQ title={title} content={content} />
    </div>
  );
};

export default Main;
