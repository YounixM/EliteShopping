import React, { Component } from "react";
import "../../assets/styles/checkout-item.scss";
import { connect } from "react-redux";

import { removeItemFromCart, addItemToCart, reduceItemQuantityFromCart} from '../../redux/cart/cart.actions';

function CheckoutItem ( { item, removeItemFromCart, addItemToCart, reduceItemQuantityFromCart } ) {
  const { name, price, quantity, imageUrl } = item;

  return (
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="product-image" />
        </div>
        <span className="name"> {name} </span>
        <span className="price"> $ {price} </span>
        <span className="quantity"> 
            <span
                className={`quantity-actions ${quantity === 1 ? "disabled" : ""}`}
                onClick={() => reduceItemQuantityFromCart(item)}>
                    &#10094;
            </span>
            {quantity} 
            <span className='quantity-actions' onClick={() => addItemToCart(item)}> &#10095; </span>
        </span>
        <div className="remove-button" onClick={ () => removeItemFromCart(item)}> &#10005; </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    reduceItemQuantityFromCart: (item) => dispatch(reduceItemQuantityFromCart(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);