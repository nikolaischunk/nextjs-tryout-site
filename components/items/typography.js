function Title({ text }) {
  return <h1 className="is-title has-text-weight-bold">{text}</h1>;
}
function SubTitle({ text }) {
  return <h7 className="is-sub-title has-text-weight-light">{text}</h7>;
}

export {Title, SubTitle};
