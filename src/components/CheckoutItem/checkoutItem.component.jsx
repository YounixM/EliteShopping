import React from "react";
import "../../assets/styles/checkout-item.scss";

export default function CheckoutItem(props) {
  let { item } = props;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="product-image" />
      </div>
    <span className="name"> {item.name} </span>
    <span className="price"> $ {item.price} </span>
    <span className="quantity"> <i class="fas fa-angle-left"></i> {item.quantity} <i class="fas fa-angle-right"></i> </span>
    <div className="remove-button">
        <i class="fas fa-times"></i>
    </div>
    </div>
  );
}
