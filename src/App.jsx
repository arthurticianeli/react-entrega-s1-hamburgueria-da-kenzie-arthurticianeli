import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import Cart from "./components/Cart";
import MenuContainer from "./components/MenuContainer";
import hamburguer from "./imgs/hamburguer.png";
import xburguer from "./imgs/x-burgue.png";
import bigKenzie from "./imgs/big-kenzie.png";
import coca from "./imgs/coca-cola.png";
import fanta from "./imgs/fanta-guarana.png";
import milkshake from "./imgs/milkshake-ovomaltine.png";

function App() {
  const products = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: hamburguer,
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: xburguer,
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: bigKenzie,
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: fanta,
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: coca,
    },
    {
      id: 6,
      name: "Milkshake",
      category: "Bebidas",
      price: 4.99,
      img: milkshake,
    },
  ];

  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const showProducts = (name) =>
    setFilteredProducts(
      products.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
    );

  const handleClick = (product) =>
    currentSale.some((e) => e.id === product.id)
      ? setShowPopUp(true)
      : setCurrentSale([
          ...currentSale,
          products.find((e) => e.id === product.id),
        ]);

  const handleRemove = (productId) =>
    setCurrentSale(
      currentSale.filter((e) => {
        return e.id !== productId;
      })
    );

  const handleRemoveAll = () => setCurrentSale([]);

  const handlePopUp = () => setShowPopUp(false);

  return (
    <div className="App">
      <Header
        showProducts={showProducts}
        setFilteredProducts={setFilteredProducts}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />
      <MenuContainer
        handleClick={handleClick}
        products={products}
        filteredProducts={filteredProducts}
        showFilter={showFilter}
        showPopUp={showPopUp}
        handlePopUp={handlePopUp}
        setShowFilter={setShowFilter}
      />

      <Cart
        currentSale={currentSale}
        setCartTotal={setCartTotal}
        showCart={showCart}
        setShowCart={setShowCart}
        cartTotal={cartTotal}
        handleRemove={handleRemove}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;
