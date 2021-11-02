import ProductCart from "../CartProduct";
import TotalSale from "../CartTotalSale";
import RemoveAll from "../ButtonRemoveAll";
import "./style.css";

const Cart = ({
  currentSale,
  setCartTotal,
  showCart,
  setShowCart,
  cartTotal,
  handleRemove,
  handleRemoveAll,
}) => {
  setCartTotal(
    currentSale.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.price,
      0
    )
  );
  const [addCart] = currentSale;

  if (addCart !== undefined) {
    setShowCart(true);
  }

  return (
    <div className="cart c">
      <div className="listContainer">
        <div className="cartTitle">Carrinho de compras</div>
        {showCart ? (
          <>
            {currentSale.map((e) => (
              <ProductCart key={e.id} product={e} handleRemove={handleRemove} />
            ))}
            <TotalSale cartTotal={cartTotal} />
            <RemoveAll
              handleRemoveAll={handleRemoveAll}
              setShowCart={setShowCart}
            />
          </>
        ) : (
          <div className="emptyCart">
            <span className="msgCart">Sacola esta vazia</span>
            <span className="addMsg">Adicionar itens</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
