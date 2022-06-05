import Divider from "../items/divider";
import Heading from "../items/heading";

const Colors = () => {
    return (
        <div className="colors" id="colors">
            <div className="">
                <Heading heading="Colors" subheading="An overview over the Colors used in this Project" />
                <button className="button is-fullwidth is-primary block">Normal</button>
                <button className="button is-fullwidth is-link block">Link</button>
                <button className="button is-fullwidth is-info block">Info</button>
                <button className="button is-fullwidth is-success block">Success</button>
                <button className="button is-fullwidth is-warning block">Warning</button>
                <button className="button is-fullwidth is-danger block">Danger</button>

                {/* <div className="article">
                    <article className="message is-primary">
                        <div className="message-header">
                            <p>Primary</p>
                        </div>
                    </article>
                    <article className="message is-link">
                        <div className="message-header">
                            <p>Link</p>
                        </div>
                    </article>
                    <article className="message is-info">
                        <div className="message-header">
                            <p>Info</p>
                        </div>
                    </article>
                    <article className="message is-success">
                        <div className="message-header">
                            <p>Success</p>
                        </div>
                    </article>
                    <article className="message is-warning">
                        <div className="message-header">
                            <p>Warning</p>
                        </div>
                    </article>
                    <article className="message is-danger">
                        <div className="message-header">
                            <p>Danger</p>
                        </div>
                    </article>
                </div> */}
            </div>
            <Divider />
        </div>
    );
}

export default Colors;
