const Timeline_label = ({ text, isMedium, color }) => {
  switch (color) {
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
  const medium = isMedium ? "is-medium " : "";
  const class_name = "tag " + medium + color;
  return (
    <>
      <header className="timeline-header">
        <span className={class_name}>{text}</span>
      </header>
    </>
  );
};

export default Timeline_label;
