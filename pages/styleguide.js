import Fonts from "../components/styleguide/Fonts";
import Colors from "../components/styleguide/Colors";

const styleguide = () => {
    return (
        <div className="styleguide">
            <div className="container">
                <Fonts />
                <Colors />
            </div>
        </div>
    );
}

export default styleguide;