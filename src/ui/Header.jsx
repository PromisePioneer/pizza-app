import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Hut</Link>
      <SearchOrder />
      <p>Firman</p>
    </header>
  );
}

export default Header;
