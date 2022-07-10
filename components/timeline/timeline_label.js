const Timeline_label = ({ text, isMedium }) => {
  const class_name = isMedium ? "tag is-medium is-primary" : "tag is-primary";
  return (
    <>
      <header className="timeline-header">
        <span className={class_name}>{text}</span>
      </header>
    </>
  );
};

export default Timeline_label;
