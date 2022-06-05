import Link from "next/link";
import Header from "../../components/copyright/cpr_header";
import "../../styles/pages/Copyright.module.scss";

const copyright = () => {
    return (
        <div className="copyright container">
            <Header />
            <div className="columns">
                <div className="column"><Link href="/copyright/faq"><button className="button is-large is-fullwidth is-link is-outlined is-family-title"> FAQ</button></Link></div>
                <div className="column"><Link href="/copyright/licenses"><button className="button is-large is-fullwidth is-link is-outlined is-family-title"> LICENSES</button></Link></div>
            </div>
        </div>
    );
}

export default copyright;