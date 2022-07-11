import FormComponent from "../components/Form";
import Heading from "../components/items/heading";

const form = () => {
  return (
    <div className="form container">
      <Heading header="Form" />
      <FormComponent />
    </div>
  );
};

export default form;
