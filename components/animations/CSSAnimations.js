import Divider from "../items/divider";
import Heading from "../items/heading";
import { RiGhostLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import styles from "../../styles/components/Animations.module.scss";

const CSSAnimations = () => {
  return (
    <div className="css_animations">
      <Heading heading="CSS Animations" subheading="Some CSS Tryouts I made" />
      <div id={styles.ghostAnimated}>
        <RiGhostLine size="5rem" />
      </div>
      <div id={styles.heartAnimated}>
        <FaHeart />
      </div>
      <Divider />
    </div>
  );
};

export default CSSAnimations;
