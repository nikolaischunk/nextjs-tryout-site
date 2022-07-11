import Heading from "../components/items/heading";
import BrowserUITest from "../components/ui-tests/browser";
import MobileUI from "../components/ui-tests/mobileUI";

const tests = () => {
  return (
    <div className="tests container">
      <Heading header="UI Tests" divider />
      <MobileUI />
      <BrowserUITest />
    </div>
  );
};

export default tests;
