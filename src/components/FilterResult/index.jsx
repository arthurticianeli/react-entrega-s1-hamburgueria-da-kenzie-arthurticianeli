import "./style.css";

const FilterResult = ({ setFilteredProducts, setShowFilter, input }) => {
  const reset = () => {
    setFilteredProducts([]);
    setShowFilter(false);
  };
  return (
    <div className="filterResult">
      <div className="showResultText">
        <span className="t1">Resultado para: </span>
        <span className="t2">{input}</span>
      </div>
      <button onClick={reset}>x</button>
    </div>
  );
};

export default FilterResult;
