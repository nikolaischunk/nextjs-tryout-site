import Divider from "../items/divider";
import Heading from "../items/heading";

const Main = () => {
  return (
    <div className="buttons-tryout">
      <Heading header="Buttons" subheader="An overview over the Button Combinations used in this Project" />

      <div className="block buttons">
        <button className="button">Normal</button>
        <button className="button is-primary">Primary</button>
        <button className="button is-secondary">Secondary</button>
        <button className="button is-link">Link</button>
        <button className="button is-info">Info</button>
        <button className="button is-success">Success</button>
        <button className="button is-warning">Warning</button>
        <button className="button is-danger">Danger</button>
      </div>

      <div className="block buttons">
        <button className="button is-light">Normal</button>
        <button className="button is-primary is-light">Primary</button>
        <button className="button is-link is-light">Link</button>
        <button className="button is-info is-light">Info</button>
        <button className="button is-success is-light">Success</button>
        <button className="button is-warning is-light">Warning</button>
        <button className="button is-danger is-light">Danger</button>
      </div>

      <div className="block buttons">
        <button className="button is-rounded">Normal</button>
        <button className="button is-primary is-rounded">Primary</button>
        <button className="button is-link is-rounded">Link</button>
        <button className="button is-info is-rounded">Info</button>
        <button className="button is-success is-rounded">Success</button>
        <button className="button is-warning is-rounded">Warning</button>
        <button className="button is-danger is-rounded">Danger</button>
      </div>

      <div className="block buttons">
        <button className="button is-outlined">Normal</button>
        <button className="button is-primary is-outlined">Primary</button>
        <button className="button is-link is-outlined">Link</button>
        <button className="button is-info is-outlined">Info</button>
        <button className="button is-success is-outlined">Success</button>
        <button className="button is-warning is-outlined">Warning</button>
        <button className="button is-danger is-outlined">Danger</button>
      </div>
      <Divider />
    </div >
  );
}

export default Main;