import "./style.css";

const RemoveAll = ({ handleRemoveAll, setShowCart }) => {
  const onClick = () => {
    handleRemoveAll();
    setShowCart(false);
  };
  return (
    <button className="removeAll" onClick={onClick}>
      Remover todos
    </button>
  );
};

export default RemoveAll;
