import { FaPlus } from "react-icons/fa";
import Timeline_item from "../timeline/timeline_item";
import Timeline_label from "../timeline/timeline_label";

const Timeline = () => {
  return (
    <div className="timeline is-centered">
      <Timeline_label text="Start" isMedium color="primary" />
      <Timeline_item
        heading="16. May 2022"
        content="Started Project"
        circle_color="primary"
      />

      <Timeline_label text="Basics" color="primary" />
      <Timeline_item
        heading="17. May 2022"
        content="Implemented BulmaCSS & hosting on Vercel"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_label text="Start of Development" color="danger" />

      <Timeline_item
        heading="23. May 2022"
        content="Added FolderStructure, Navbar & Theme"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="24. May 2022"
        content="Developed Branding and implemented Style Guide"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />
      <Timeline_label text="Styleguide" color="danger" />
      <Timeline_item
        heading="28. May 2022"
        content="Added Footer and overhauled Style Guide"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="29. May 2022"
        content="Implemented Helper Files and started implementation of Copyright Page"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="3. June 2022"
        content="Finished Copyright Page & Started with Cookies"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />
      <Timeline_label text="Copuright Page" color="danger" />
      <Timeline_item
        heading="5. June 2022"
        content="Started with Licence page and added Navbar Bugfixes"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="12. - 19. June 2022"
        content="Worked on cookie message and expiration date and finished it"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_label text="Cookie Banner" color="danger" />

      <Timeline_item
        heading="20. June 2022"
        content="Implemented and Styled Disclosure page"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="24. June 2022"
        content="Implemented Animation Site & added CSS Animations"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="27. June 2022"
        content=" Added more Animation & started Image Card"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />
      <Timeline_label text="Animations" color="danger" />
      <Timeline_item
        heading="28. June 2022"
        content="Implemented Image Page"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="3. July 2022"
        content="Added Video comparison page"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="4. July 2022"
        content="Fixed Bugs, added more Utils, implemented SVG Animation"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_item
        heading="7. July"
        content="Implemented audio comparison page"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />

      <Timeline_label text="Comparison Pages" color="danger" />

      <Timeline_item
        heading="10. July 2022"
        content="Added reusable Timeline & added Timeline Events"
        circle_color="primary"
        circle_icon={<FaPlus />}
      />
      <Timeline_label text="Timeline" color="danger" />
      <Timeline_item heading="" content="" circle_color="primary" />

      <Timeline_label text="End" isMedium color="primary" />
    </div>
  );
};

export default Timeline;
