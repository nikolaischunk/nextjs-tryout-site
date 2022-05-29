const Content = ({ title, content }) => {
    let t = title.replace(/-/g, " ")
    return (
        <div class="content">
            <div className="tile">
                <article className="tile is-child notification is-primary">
                    <div className="content">
                        <p className="title">{t}</p>
                        <div className="content">
                            {content}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Content;