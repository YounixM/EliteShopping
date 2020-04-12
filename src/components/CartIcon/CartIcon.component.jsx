import React from 'react';
import { connect } from 'react-redux';

import '../../assets/styles/cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/images/cart.svg';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


function CartIcon ({ toggleCartVisibility, itemsCount }) {
    return (
        <div className='cart-icon' onClick={toggleCartVisibility}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
