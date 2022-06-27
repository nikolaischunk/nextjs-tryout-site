import Divider from "../items/divider";
import Heading from "../items/heading";
import Image from "next/image";
import gifPicture from "../../public/media/gif/gatsby.gif";

const GIFAnimation = () => {
  return (
    <div className="GIFAnimation">
      <Heading
        heading="GIF Animations"
        subheading="An example of an animated GIF"
      />
      <Image src={gifPicture} alt="GIF Animation" />
    </div>
  );
};

export default GIFAnimation;
