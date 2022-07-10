import Heading from "../../components/items/heading";
import Media_comparison from "../../components/media/comparison";
import { sound_formats } from "../../db/sound_formats";

const sound = () => {
  return (
    <div className="sound container">
      <Heading header="Sound" />
      <Media_comparison content={sound_formats} type="audio" />
    </div>
  );
};

export default sound;
