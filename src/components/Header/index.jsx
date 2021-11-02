import "./style.css";
import Filter from "../Filter";

const Header = ({
  showProducts,
  setFilteredProducts,
  setShowFilter,
  showFilter,
}) => {
  return (
    <header className="a">
      <div className="logo">
        <span className="burger">Burguer</span>
        <span className="kenzie">Kenzie</span>
      </div>
      <Filter
        showProducts={showProducts}
        setFilteredProducts={setFilteredProducts}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />
    </header>
  );
};

export default Header;
