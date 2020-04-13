import CartActionTypes from './cart.types';

export const toggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItemToCart = (payload) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: payload
});

export const removeItemFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: payload
});

export const reduceItemQuantityFromCart = (payload) => ({
    type: CartActionTypes.REDUCE_ITEM_QUANTITY_FROM_CART,
    payload: payload
});