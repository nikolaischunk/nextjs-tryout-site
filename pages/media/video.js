import Heading from "../../components/items/heading";
import { video_formats } from "../../db/video_formats";
import Media_comparison from "../../components/media/comparison";

const video = () => {
  return (
    <div className="videos container mt-5">
      <Heading header="Video" />
      <Media_comparison content={video_formats} type="video" />
    </div>
  );
};

export default video;
