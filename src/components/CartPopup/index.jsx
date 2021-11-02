import "./style.css";

const Popup = ({ handlePopUp }) => {
  return (
    <div className="popup">
      <span>Escolha um item diferente</span>
      <button onClick={() => handlePopUp()}>Ok</button>
    </div>
  );
};

export default Popup;
