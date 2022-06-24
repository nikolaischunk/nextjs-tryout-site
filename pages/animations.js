import CSSAnimations from "../components/animations/CSSAnimations";

import Heading from "../components/items/heading";
const animations = () => {
  return (
    <div className="animations">
      <div className="container">
        <Heading
          heading="Animations"
          subheading="This is an Collection of Animations"
          divider=" "
        />
        <CSSAnimations />
      </div>
    </div>
  );
};

export default animations;