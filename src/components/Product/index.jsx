import "./style.css";

const Product = ({ product }) => {
  return (
    <>
      <figure>
        <img src={product.img} alt="Imagem do produto" />
      </figure>

      <span className="name">{product.name}</span>
      <span className="category">{product.category}</span>
      <span className="price">R$ {product.price.toFixed(2)}</span>
    </>
  );
};

export default Product;
