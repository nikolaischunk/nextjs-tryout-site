import CSSAnimations from "../../components/animations/CSSAnimations";
import Link from "next/link";
import Heading from "../../components/items/heading";
import Button from "../../components/items/button";

const animations = () => {
  return (
    <div className="animations">
      <div className="container">
        <Heading
          header="Animations"
          subheader="This is an Collection of Animations Styles"
          divider=" "
        />
        <div className="columns">
          <Button
            type="link"
            label="CSS"
            link="/animations/css"
            isOutlined={true}
          />
          <Button
            type="link"
            label="GIF"
            link="/animations/gif"
            isOutlined={true}
          />
        </div>
        <div className="columns">
          <Button
            type="link"
            label="SVG"
            link="/animations/svg"
            isOutlined={true}
          />
          <Button
            type="link"
            label="SCROLL"
            link="/animations/scroll  "
            isOutlined={true}
          />
        </div>
      </div>
    </div>
  );
};

export default animations;
