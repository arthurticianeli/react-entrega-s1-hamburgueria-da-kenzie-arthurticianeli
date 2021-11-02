import "./style.css";

const Button = ({ handleClick, product, children }) => {
  return <button onClick={() => handleClick(product)}>{children}</button>;
};

export default Button;
