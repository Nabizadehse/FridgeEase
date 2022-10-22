import { Link } from "react-router-dom";
import Plus from "../img/plus.png";
import ItemList from "./itemList";
const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <Link to="/tolist" className="fakeBTN">
        <h4>Lägg till inköpslista</h4>
        <img src={Plus} className="plusBTN" alt="" />
      </Link>
      <ItemList url={"list"} />
    </div>
  );
};

export default ShoppingList;