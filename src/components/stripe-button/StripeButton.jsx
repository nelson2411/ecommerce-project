import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K83yTGB8lVZEq76RbetrmqbhpyPLdjE0VYx2ELNnzEpewdvUGZwuhBEWqgGSmCCSBKo62VsZLxQCjl7Kst1V6BN00Vcomatiz";

  const onToken = (token) => {
    console.log({ token });
    alert("payment succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;