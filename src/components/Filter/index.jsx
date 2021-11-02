import { useState } from "react";
import "./style.css";
import FilterResult from "../FilterResult";

const Filter = ({
  showProducts,
  showFilter,
  setFilteredProducts,
  setShowFilter,
}) => {
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      {showFilter ? (
        <FilterResult
          setFilteredProducts={setFilteredProducts}
          setShowFilter={setShowFilter}
          input={input}
        />
      ) : (
        <div className="filter">
          <input
            className="input"
            onChange={handleInput}
            placeholder="
      Digitar Pesquisa"
          ></input>
          <button className="button" onClick={() => showProducts(input)}>
            Pesquisar
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
