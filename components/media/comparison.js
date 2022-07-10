import Common_card from "./common_card";

const Media_comparison = ({ content, type }) => {
  return (
    <div className="comparison  mt-3">
      <div className="columns">
        {content.map((format) => generateCard(format, type))}
      </div>
    </div>
  );
};
function generateCard(format, type) {
  return (
    <div className="column is-4">
      <Common_card
        type={type}
        name={format.name}
        description={format.description}
        path={format.path}
        format={format.format}
        size={format.size}
        pro={format.pro}
        contra={format.contra}
      />
    </div>
  );
}
export default Media_comparison;
