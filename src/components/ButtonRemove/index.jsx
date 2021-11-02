import "./style.css";

const Remove = ({ product, handleRemove }) => {
  return <button onClick={() => handleRemove(product.id)}>Remover</button>;
};

export default Remove;
