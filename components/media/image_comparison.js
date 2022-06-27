import { image_high_detail } from "../../db/images";
import Common_card from "./images/common_card";

const Image_comparison = () => {
  return (
    <div class="Image_comparison mt-3 container">
      <div class="columns">
        {image_high_detail.map((img) => generateCard(img))}
      </div>
    </div>
  );
};

function generateCard(img) {
  console.log(img);
  return (
    <div class="column is-4">
      <Common_card
        name={img.name}
        description={img.description}
        path={img.path}
        format={img.format}
        size={img.size}
        pro={img.pro}
        contra={img.contra}
      />
    </div>
  );
}

export default Image_comparison;
