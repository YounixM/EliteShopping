import React from 'react';
import { connect } from 'react-redux';

import '../../assets/styles/cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/images/cart.svg';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';


function CartIcon ({ toggleCartVisibility, cartItems }) {
    let itemsCount = cartItems.reduce(function (total, currentValue) {
        return total + currentValue.count;
    }, 0);

    return (
        <div className='cart-icon' onClick={toggleCartVisibility}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
