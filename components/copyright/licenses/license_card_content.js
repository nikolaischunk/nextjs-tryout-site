import { GoLinkExternal } from "react-icons/go";
const Content = ({ title, url, content }) => {
    let t = title.replace(/-/g, " ")
    console.log(url)
    return (
        <div className="content">
            <div className="tile">
                <article className="tile is-child notification is-primary">
                    <div className="content">
                        <p className="title is-family-title">{t}</p>
                        {url ?
                            <a href={url} target="_blank" className="icon-text subtitle is-family-sub-title">
                                <span>More Information</span>
                                <span className="icon">
                                    <GoLinkExternal />
                                </span>
                            </a>
                            : <span />}
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