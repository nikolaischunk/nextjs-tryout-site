const Heading = ({ heading, subheading }) => {
    return (
        <div className="site_heading mb-3 container">
            <h1 className="is-family-title has-text-weight-bold is-size-1">{heading}</h1>
            <p className="is-family-sub-title has-text-weight-light">{subheading}</p>
        </div>
    );
}

export default Heading;
