const Heading = ({ heading, subheading }) => {
    return (
        <div className="site_heading mb-3">
            <h1 className="has-text-weight-semibold is-size-1 is-family-primary">{heading}</h1>
            <p className="is-family-secondary has-text-weight-light">{subheading}</p>
        </div>
    );
}

export default Heading;
