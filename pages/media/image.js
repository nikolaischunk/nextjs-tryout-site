import Heading from "../../components/items/heading";
import { image_formats } from "../../db/image_formats";
import Media_comparison from "../../components/media/comparison";
const image_comparison = () => {
  return (
    <div className="image_comparison container mt-5">
      <Heading header="Image" />
      <Media_comparison content={image_formats} type="image" />
    </div>
  );
};

export default image_comparison;
