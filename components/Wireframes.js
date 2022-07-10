import Image from "next/image";
import Divider from "./items/divider";
import Heading from "./items/heading";
const WireframeComponent = () => {
  return (
    <div className="wireframe_component">
      <Heading subheader="Styleguide" />
      <Image
        src="/media/images/wireframes/Styleguide.png"
        width={"1280 px"}
        height={"1100 px"}
        alt="Wireframe image"
      />
      <Divider />
      <Heading subheader="Media Comparison" />
      <Image
        src="/media/images/wireframes/Comparison.png"
        width={1280 + "px"}
        height={720 + "px"}
        alt="Wireframe image"
      />
      <Divider />
      <Heading subheader="Copyright" />
      <Image
        src="/media/images/wireframes/Copyright.png"
        width={1280 + "px"}
        height={720 + "px"}
        alt="Wireframe image"
      />
    </div>
  );
};

export default WireframeComponent;
