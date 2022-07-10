import Link from "next/link";

const Button = ({ type, isOutlined, label, link }) => {
  let button_class = "button is-large is-fullwidth is-family-title";
  button_class += type === "link" ? " is-link" : " is-primary";
  button_class += isOutlined ? " is-outlined" : "";

  console.log(link);
  console.log(button_class);
  return (
    <div className="custom_button column">
      <Link href={link}>
        <button className={button_class}>{label}</button>
      </Link>
    </div>
  );
};

export default Button;
