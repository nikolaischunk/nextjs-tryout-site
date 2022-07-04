import Video_comparison from "../../components/media/video_comparison";
import Heading from "../../components/items/heading";
const video = () => {
  return (
    <div className="videos container mt-5">
      <Heading header="Video" />
      <Video_comparison />
    </div>
  );
};

export default video;
