import Remove from "../ButtonRemove";
import "./style.css";

const ProductCart = ({ product, handleRemove }) => {
  return (
    <div className="cartContainer">
      <figure>
        <img src={product.img} alt="Imagem do produto" />
      </figure>
      <div className="details">
        <span className="name">{product.name}</span>
        <span className="category">{product.category}</span>
      </div>
      <Remove product={product} handleRemove={handleRemove} />
    </div>
  );
};

export default ProductCart;
