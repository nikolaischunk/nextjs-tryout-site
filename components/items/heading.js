import Divider from "./divider";

const Heading = ({ heading, subheading, divider }) => {
    return (
        <div className="site_heading mb-3">
            <h1 className="is-family-title has-text-weight-bold is-size-1">{heading}</h1>
            <p className="is-family-sub-title has-text-weight-light">{subheading}</p>
            {divider ? <Divider text={divider} /> : <></>}
        </div>
    );
}

export default Heading;
