import Divider from "../items/divider";

const Header = () => {
    return (<div className="cpr_header container">
        <h1 className="has-text-weight-semibold is-size-1 is-family-primary">Copyright</h1>
        <p className="is-family-secondary has-text-weight-light">An overview over the Headings used in this Project</p>
        <br />
        <Divider text="Divider Text" />
    </div>);
}

export default Header;