import Text from "../items/text";
import Image from "next/image";
const Mobile_desktop = ({ site_name, desktop_path, mobile_path }) => {
  return (
    <div className="mobile_desktop box">
      <Text text={site_name} />
      <Image
        src={desktop_path}
        width={1280 + "px"}
        height={720 + "px"}
        alt={site_name + "_desktop"}
      />
      <Image
        src={mobile_path}
        width={1280 + "px"}
        height={720 + "px"}
        alt={site_name + "_mobile"}
      />
    </div>
  );
};

export default Mobile_desktop;
