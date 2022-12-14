import { Link } from "react-router-dom";
import Plus from "../img/plus.png";
import ItemList from "./itemList";
const Fridge = () => {
  return (
    <section>
      <Link to="/tofridge" className="fakeBTN">
        <h4>Lägg till din kylskåp</h4>
        <img src={Plus} className="plusBTN" alt="" />
      </Link>
      <ItemList url={"fridge"} />
    </section>
  );
};

export default Fridge;
