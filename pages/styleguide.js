import Fonts from "../components/styleguide/Fonts";
import Colors from "../components/styleguide/Colors";
import Buttons from "../components/styleguide/Buttons";
import Header from "../components/styleguide/Header";
import Heading from "../components/items/heading";
const styleguide = () => {
    return (
        <div className="styleguide">
            <div className="container">
                <Heading header="Styleguide" subheader="This is an Overview over different Style aspects that get implemented on this Website." divider=" " />
                <Fonts />
                <Colors />
                <Buttons />
                <Header />
            </div>
        </div>
    );
}

export default styleguide;