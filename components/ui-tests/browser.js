import Image from "next/image";
import Heading from "../items/heading";
import Text from "../items/text";

const BrowserUITest = () => {
  return (
    <div className="browser_ui_test">
      <Heading subheader={"Browser UI Tests"} />
      <Text text="Firefox" />
      <Image
        src="/media/images/showcase/browser/firefox.png"
        width={1280 + "px"}
        height={720 + "px"}
        alt="Firefox"
      />

      <Text text="Chrome" />
      <Image
        src="/media/images/showcase/browser/chrome.png"
        width={1280 + "px"}
        height={720 + "px"}
        alt="Chrome"
      />

      <Text text="Edge" />
      <Image
        src="/media/images/showcase/browser/edge.png"
        width={1280 + "px"}
        height={720 + "px"}
        alt="Edge"
      />
    </div>
  );
};

export default BrowserUITest;
