import Heading from "./items/heading";
import Timeline from "./main/Timeline";

const Main = () => {
  return (
    <div className="main">
      <Heading
        header={"Timeline"}
        subheader="Overview over the Development Process"
      />
      <Timeline />
    </div>
  );
};

export default Main;
