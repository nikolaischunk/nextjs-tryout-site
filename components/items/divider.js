const Divider = ({ text, isVertical, left, right }) => {
    let classname = "divider"
    classname = isVertical ? classname.concat(" is-vertical") : classname;
    classname = left ? classname.concat(" is-left") : classname;
    classname = right ? classname.concat(" is-right") : classname;
    return (
        <div className={"is-family-title " + classname} >{text}</div >
    );
}

export default Divider;