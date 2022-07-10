const BlockQuote = ({ text }) => {
  return (
    <div className="content block_quote">
      <blockquote>{text}</blockquote>
    </div>
  );
};

export default BlockQuote;
