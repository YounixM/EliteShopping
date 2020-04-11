import React, { Component } from 'react';

import '../../assets/styles/cart.scss';

import CustomButton from '../Base/Button/button.component';

export default class Cart extends Component {
    render() {
        return (
            <div className='cart-dropdown'>
                <div className="cart-items" />
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        )
    }
}
