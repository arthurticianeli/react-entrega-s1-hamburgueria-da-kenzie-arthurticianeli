import Product from "../Product";
import Button from "../Button";
import "./style.css";

const ShowProducts = ({ list, handleClick }) => {
  return (
    <>
      {list.map((e) => (
        <li key={e.id} className="card">
          <Product product={e} handleClick={handleClick} />
          <Button handleClick={handleClick} product={e}>
            Adicionar
          </Button>
        </li>
      ))}
    </>
  );
};

export default ShowProducts;
