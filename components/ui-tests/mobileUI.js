import Heading from "../items/heading";
import Mobile_desktop from "./mobile_desktop";

const MobileUI = () => {
  return (
    <div className="mobile_ui">
      <Heading subheader="Mobile UI Tests" />
      <Mobile_desktop
        site_name="Main"
        desktop_path="/media/images/showcase/index/desktop.png"
        mobile_path="/media/images/showcase/index/phone.png"
      />
      <Mobile_desktop
        site_name="Styleguide"
        desktop_path="/media/images/showcase/styleguide/desktop.png"
        mobile_path="/media/images/showcase/styleguide/phone.png"
      />
      <Mobile_desktop
        site_name="Comparison"
        desktop_path="/media/images/showcase/comparison/desktop.png"
        mobile_path="/media/images/showcase/comparison/phone.png"
      />
      <Mobile_desktop
        site_name="Copyright"
        desktop_path="/media/images/showcase/copyright/desktop.png"
        mobile_path="/media/images/showcase/copyright/phone.png"
      />
    </div>
  );
};

export default MobileUI;
