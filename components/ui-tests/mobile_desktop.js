import Text from "../items/text";
import Heading from "../items/heading";
import Image from "next/image";
const Mobile_desktop = ({ site_name, desktop_path, mobile_path }) => {
  return (
    <div className="mobile_desktop my-7 box">
      {/* <Text text={site_name} /> */}
      <Heading subheader={site_name} />
      <div className="columns">
        <div className="column">
          <Image
            src={desktop_path}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={site_name + "_desktop"}
          />
        </div>
        <div className="column">
          <Image
            src={mobile_path}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={site_name + "_mobile"}
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile_desktop;
