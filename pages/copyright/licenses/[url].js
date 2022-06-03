import Main from '../../../components/copyright/licenses/license_main';

let { licenses } = require('../../../db/licenses');

export const getStaticProps = async ({ params }) => {
    //https://medium.com/swlh/next-js-usestaticprops-usestaticpaths-static-json-data-9f7903b8a5aa
    const licenseList = licenses.filter((l) => l.slug === params.url);
    return {
        props: {
            license: licenses.filter((l) => l.slug === params.url)[0],
        },
    };
};
export const getStaticPaths = async () => {
    const paths = licenses.map((l) => ({
        params: { url: l.slug },
    }));
    return { paths, fallback: false };
};

const license_page = ({ license }) => {
    return (
        <div className="license">
            <Main title={license.name} content={license.content} />
        </div>);
}

export default license_page;