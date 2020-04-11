import React from 'react';

import '../../assets/styles/cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/images/cart.svg';

import { connect } from 'react-redux';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';

function CartIcon ({ toggleCartVisibility }) {
    return (
        <div className='cart-icon' onClick={toggleCartVisibility}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
