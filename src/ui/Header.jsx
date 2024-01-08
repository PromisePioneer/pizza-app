import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">Pizza Hut</Link>
      <p>Firman</p>
    </header>
  );
}

export default Header;
