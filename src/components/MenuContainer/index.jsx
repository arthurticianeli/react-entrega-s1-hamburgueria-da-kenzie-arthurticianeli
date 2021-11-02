import ShowProducts from "../ShowProducts";
import Popup from "../CartPopup";

import "./style.css";

const MenuContainer = ({
  products,
  handleClick,
  filteredProducts,
  showFilter,
  setShowFilter,
  showPopUp,
  handlePopUp,
}) => {
  const [filtered] = filteredProducts;

  if (filtered !== undefined) {
    setShowFilter(true);
  }

  return (
    <ul className="showContainer b">
      {showFilter ? (
        <ShowProducts list={filteredProducts} handleClick={handleClick} />
      ) : (
        <ShowProducts list={products} handleClick={handleClick} />
      )}
      {showPopUp && <Popup handlePopUp={handlePopUp} />}
    </ul>
  );
};

export default MenuContainer;
