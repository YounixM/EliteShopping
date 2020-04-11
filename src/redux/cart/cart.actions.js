import CartActionTypes from './cart.types';

export const toggleCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItemToCart = (payload) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: payload
});