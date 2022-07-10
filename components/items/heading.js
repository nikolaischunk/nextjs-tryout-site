import Divider from "./divider";

const Heading = ({ header, subheader, divider }) => {
  return (
    <div className="site_heading block">
      <h1 className="is-title has-text-weight-bold">{header}</h1>
      <p className="is-sub-title has-text-weight-light">{subheader}</p>
      {divider ? <Divider text={divider} /> : <></>}
    </div>
  );
};

export default Heading;
