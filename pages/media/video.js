import Video_comparison from "../../components/media/video_comparison";
import Heading from "../../components/items/Heading";
const video = () => {
  return (
    <div className="videos container mt-5">
      <Heading heading="Video" />
      <Video_comparison />
    </div>
  );
};

export default video;
