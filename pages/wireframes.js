import Heading from "../components/items/heading";
import WireframeComponent from "../components/Wireframes";

const Wireframes = () => {
  return (
    <div className="wireframes container">
      <Heading
        header="Project Wireframes"
        subheader="How I Imagined the Project to look like"
        divider={"WIREFRAMES"}
      />
      <WireframeComponent />
    </div>
  );
};

export default Wireframes;
