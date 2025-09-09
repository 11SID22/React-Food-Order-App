import { useContext } from "react";

import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNoOfItems, item) => {
    return totalNoOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restuarant logo" />
        <h1>Happy Meals</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
