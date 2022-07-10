import Timeline from "./main/Timeline";
import Heading from "./items/heading";
import Text from "./items/text";
import BlockQuote from "./items/blockquote";
import Divider from "./items/divider";

const Main = () => {
  return (
    <div className="main">
      <Heading
        header={"Project Experience"}
        subheader="Overview over the Development Process"
      />
      <Text text="When starting this Project I had no prior experience neither with working with NextJS nor with the CSS Framework BulmaCSS.  During this Module I learned, how to set up a new Project with NextJS, Implement a Site Theming and working with cookies. I also got to know NextJS better, added Style Components and  CSS Animations. Comparing the different File formats helped me getting a better understanding of what to use and what to not use for a website." />
      <Divider />
      <Heading subheader="Timeline" />
      <Timeline />
    </div>
  );
};

export default Main;
