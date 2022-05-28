import Fonts from "../components/styleguide/Fonts";
import Colors from "../components/styleguide/Colors";
import Buttons from "../components/Buttons";
const styleguide = () => {
    return (
        <div className="styleguide">
            <div className="container">
                <Fonts />
                <Colors />
                <Buttons />
            </div>
        </div>
    );
}

export default styleguide;