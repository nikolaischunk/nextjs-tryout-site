const Content = ({ title, content }) => {
    let t = title.replace(/-/g, " ")
    return (
        <div className="content">
            <div className="tile">
                <article className="tile is-child notification is-primary">
                    <div className="content">
                        <p className="title is-family-title">{t}</p>
                        <div className="content is-family-text">
                            {content}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Content;