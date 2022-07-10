
import Divider from "../items/divider";
import Heading from "../items/heading";
const Header = () => {
  return (
    <div className="header">
      <Heading header="Heading" subheader="An overview over the Headings used in this Project" />
      <h1 className="title is-1 is-family-title">Title 1</h1>
      <h2 className="title is-2 is-family-title">Title 2</h2>
      <h3 className="title is-3 is-family-title">Title 3</h3>
      <h4 className="title is-4 is-family-title">Title 4</h4>
      <h5 className="title is-5 is-family-title">Title 5</h5>
      <h6 className="title is-6 is-family-title">Title 6</h6>
      <Divider />
    </div>
  );
};

export default Header;
