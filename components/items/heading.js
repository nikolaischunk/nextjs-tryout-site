import Divider from "./divider";

const Heading = ({ heading, subheading, divider }) => {
  return (
    <div className="site_heading mb-3">
      <h1 className="is-title has-text-weight-bold">{heading}</h1>
      <p className="is-sub-title has-text-weight-light">{subheading}</p>
      {divider ? <Divider text={divider} /> : <></>}
    </div>
  );
};

export default Heading;
