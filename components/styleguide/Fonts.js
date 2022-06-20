import Divider from "../items/divider";
import Heading from "../items/heading";

const Fonts = () => {
    return (
        <div className="fonts" id="fonts">
            <div className="">
                <Heading heading="Fonts" subheading="An overview over the Fonts used in this Project" />

                <h3 className="has-text-weight-semibold is-size-3">Rubik</h3>
                <h4 className="=is-size-4 is-family-sub-title">Title Font</h4>

                <h3 className="has-text-weight-semibold is-size-3">Raleway</h3>
                <h4 className="=is-size-4 is-family-sub-title">Subtitle Font</h4>

                <h3 className="has-text-weight-semibold is-size-3">Hind Vadodara</h3>
                <h4 className="=is-size-4 is-family-sub-title">Body Font</h4>
            </div>
            <Divider />
        </div>
    );
}

export default Fonts;
