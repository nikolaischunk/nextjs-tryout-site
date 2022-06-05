import Link from "next/link";
import { useRouter } from 'next/router';

let { licenses } = require('../../../db/licenses');

const Navigate = () => {
    const { asPath } = useRouter();
    let currentLocation = asPath.split("/").slice(-1)[0]
    return (
        <div className="navigate is-sticky">
            <aside className="menu">
                <ul className="menu-list">
                    <li>
                        <Link href="/copyright/licenses">
                            <a className={`${currentLocation === "licenses" ? "is-active " : " "}is-family-title`}>Start</a>
                        </Link>
                    </li>
                    <p className="menu-label is-family-title">
                        Overview
                    </p>
                    {generateLinks(licenses, currentLocation)}
                </ul>
            </aside>

        </div>
    );
}

function generateLinks(licenses, path) {


    let links = []
    licenses.forEach(l => {
        links.push(
            <li>
                <Link href={`/copyright/licenses/${l.slug}`}>
                    <a className={`${path === l.slug ? "is-active " : " "}is-family-title`}>{l.short}</a>
                </Link>
            </li>
        )
    })
    return links
}

export default Navigate;