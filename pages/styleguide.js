import Fonts from "../components/styleguide/Fonts";
import Colors from "../components/styleguide/Colors";
import Buttons from "../components/styleguide/Buttons";
import Header from "../components/styleguide/Header";
const styleguide = () => {
    return (
        <div className="styleguide">
            <div className="container">
                <Fonts />
                <Colors />
                <Buttons />
                <Header />
            </div>
        </div>
    );
}

export default styleguide;