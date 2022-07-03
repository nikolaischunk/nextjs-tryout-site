import { video_formats } from "../../db/video_formats";
import Common_card from "./common_card";

const Video_comparison = () => {
  return (
    <div className="Image_comparison mt-3">
      <div className="columns">
        {video_formats.map((format) => generateCard(format))}
      </div>
    </div>
  );
};

function generateCard(format) {
  return (
    <div className="column is-4">
      <Common_card
        type="video"
        name={format.name}
        tag="video"
        description={format.description}
        path={format.path}
        format={format.format}
        size={format.size}
        pro={format.pro}
        contra={format.contra}
      />
    </div>
  );
}

export default Video_comparison;
