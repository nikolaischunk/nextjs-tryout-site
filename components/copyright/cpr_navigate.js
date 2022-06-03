import Link from "next/link";
import { useRouter } from 'next/router';

let { faq } = require('../../db/copyright_faq');

const Navigate = () => {
    const { asPath } = useRouter();
    let currentLocation = asPath.split("/").slice(-1)[0]
    return (
        <div className="navigate is-sticky">
            <aside className="menu">
                <ul className="menu-list">
                    <li>
                        <Link href="/copyright">
                            <a className={`${currentLocation === "copyright" ? "is-active " : " "}is-family-title`}>Start</a>
                        </Link>
                    </li>
                    <p className="menu-label is-family-title">
                        FAQ
                    </p>
                    {generateLinks(faq, currentLocation)}
                </ul>
            </aside>

        </div>
    );
}

function generateLinks(faq, path) {


    let links = []
    faq.forEach(q => {
        links.push(
            <li>
                <Link href={`/copyright/faq/${q.url}`}>
                    <a className={`${path === q.url ? "is-active " : " "}is-family-title`}>{q.question}</a>
                </Link>
            </li>
        )
    })
    return links
}

export default Navigate;