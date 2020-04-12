import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../CheckoutItem/checkoutItem.component';

import "../../assets/styles/checkout.scss";

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        {
            this.props.cartItems.length > 0 ?
            <div className='checkout-items'>
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
    
            {
                this.props.cartItems.map(item => {
                    return <CheckoutItem key={item.id} item={item}/>;
                })
            }
            <div className="total">TOTAL: $ {this.props.cartTotal}</div>
          </div> :
          <div className='cart-empty'> NO ITEMS IN THE CART </div>
        }
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);