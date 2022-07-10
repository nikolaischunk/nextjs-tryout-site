const Text = ({ text, isBox, maxWidth }) => {
  const block = isBox ? "box" : "";
  let class_name = "text block" + block;
  return (
    <div className={class_name}>
      <p>{text}</p>
    </div>
  );
};

export default Text;
