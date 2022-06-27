import { RiGhostLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import Divider from "../items/divider";
import Heading from "../items/heading";
import styles from "../../styles/components/Animations.module.scss";

const CSSAnimations = () => {
  return (
    <div className="css_animations">
      <Heading heading="CSS Animations" subheading="Some CSS Animation tryouts I made" />
      <div id={styles.ghostAnimated}>
        <RiGhostLine size="5rem" />
      </div>
      <div id={styles.heartAnimated}>
        <FaHeart size="5rem"/>
      </div>
      <div id={styles.bellAnimated}>
        <MdNotificationsActive size="5rem" />
      </div>
      <Divider />
    </div>
  );
};

export default CSSAnimations;
