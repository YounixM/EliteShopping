import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../CheckoutItem/checkoutItem.component";
import StripeCheckoutButton from '../Stripe/stripe-button.component';

import "../../assets/styles/checkout.scss";

class Checkout extends Component {
  render() {
    let { cartItems, cartTotal } = this.props;

    return (
      <div className="checkout">
        {this.props.cartItems.length > 0 ? (
          <div className='cart-details'>
            <div className="checkout-header">
              <div className="header-block">
                <span> Product </span>
              </div>
              <div className="header-block">
                <span> Description </span>
              </div>
              <div className="header-block">
                <span> Price </span>
              </div>
              <div className="header-block">
                <span> Quantity </span>
              </div>
              <div className="header-block">
                <span> Remove </span>
              </div>
            </div>

            <div className="checkout-items">
              {cartItems.map((item) => {
                return (
                  <CheckoutItem
                    key={item.id}
                    item={item}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="cart-empty"> NO ITEMS IN THE CART </div>
        )}

        <div className="checkout-summary">
          <div className="total">TOTAL: $ {cartTotal}</div>
          <div className='pay'>
            <span className='info'> Please use the below test card details for the payments  </span>
            <span className='card-number'> CARD NO: 4242 4242 4242 4242  </span>
            <span className='card-exp'> EXP: 01/21  </span>
            <span className='card-cvv'> CVV: 123  </span>

            <StripeCheckoutButton price={cartTotal} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
