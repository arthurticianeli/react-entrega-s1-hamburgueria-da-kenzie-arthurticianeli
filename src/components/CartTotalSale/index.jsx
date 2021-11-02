import "./style.css";

const TotalSale = ({ cartTotal }) => {
  return (
    <div className="totalSale">
      <span className="total">Total</span>
      <span className="cartTotal">R$ {cartTotal.toFixed(2)}</span>
    </div>
  );
};

export default TotalSale;
