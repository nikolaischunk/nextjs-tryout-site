const Colors = () => {
    return (
        <div className="colors" id="colors">
            <div className="box">
                <h1 className="has-text-weight-semibold is-size-1 is-family-primary">Colors</h1>
                <p className="is-family-secondary has-text-weight-light">An overview over the Colors used in this Project</p>
                <br />
                <button class="button is-fullwidth is-primary block">Normal</button>
                <button class="button is-fullwidth is-link block">Link</button>
                <button class="button is-fullwidth is-info block">Info</button>
                <button class="button is-fullwidth is-success block">Success</button>
                <button class="button is-fullwidth is-warning block">Warning</button>
                <button class="button is-fullwidth is-danger block">Danger</button>

                {/* <div className="article">
                    <article className="message is-primary">
                        <div className="message-header">
                            <p>Primary</p>
                        </div>
                    </article>
                    <article class="message is-link">
                        <div class="message-header">
                            <p>Link</p>
                        </div>
                    </article>
                    <article class="message is-info">
                        <div class="message-header">
                            <p>Info</p>
                        </div>
                    </article>
                    <article class="message is-success">
                        <div class="message-header">
                            <p>Success</p>
                        </div>
                    </article>
                    <article class="message is-warning">
                        <div class="message-header">
                            <p>Warning</p>
                        </div>
                    </article>
                    <article class="message is-danger">
                        <div class="message-header">
                            <p>Danger</p>
                        </div>
                    </article>
                </div> */}
            </div>
            <br />
        </div>
    );
}

export default Colors;
