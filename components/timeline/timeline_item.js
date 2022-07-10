const Timeline_item = ({ heading, content, circle_color, circle_icon }) => {
  let color;
  switch (circle_color) {
    case "primary":
      color = "is-primary";
      break;
    case "success":
      color = "is-success";
      break;
    case "warning":
      color = "is-warning";
      break;
    case "danger":
      color = "is-danger";
      break;
    default:
      color = "";
      break;
  }

  let circle_icon_class = circle_icon ? " is-icon" : " ";
  let circle_class = color + " timeline-marker" + circle_icon_class;

  return (
    <div className="timeline-item">
      <div className={circle_class}>{circle_icon}</div>
      <div className="timeline-content">
        <p className="heading">{heading}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Timeline_item;
