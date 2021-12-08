import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.styles.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
