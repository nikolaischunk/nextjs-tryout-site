import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Timeline_item from "../timeline/timeline_item";
import Timeline_label from "../timeline/timeline_label";

const Timeline = () => {
  return (
    <div className="timeline is-centered">
      <Timeline_label text="Start" isMedium />

      <Timeline_item
        heading="January 2016"
        content="Timeline content - Can include any HTML element"
        circle_color="primary"
      />

      <Timeline_item
        heading="January 2016"
        content="Timeline content - Can include any HTML element"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_label text="Start" />

      <Timeline_item
        heading="March 2017"
        content="Timeline content - Can include any HTML element"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />
      <Timeline_label text="End" isMedium />
    </div>
  );
};

export default Timeline;
