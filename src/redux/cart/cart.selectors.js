import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, currentValue) => {
        return total + currentValue.quantity;
    }, 0)
)

export const selectCartVisibility = createSelector(
    [selectCart],
    cart => cart.showCart
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, currentValue) => {
        return total + (currentValue.price * currentValue.quantity);
    }, 0)
)