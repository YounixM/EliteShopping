const INITIAL_STATE = {
    showCart: false,
    cartItems: []
}

function addItemToCart (currentCartItems, itemToAdd) {
    let items = [...currentCartItems],
        itemExistsInCart = false;

    for(let i=0; i< items.length; i++)  {
        if(items[i].id === itemToAdd.id) {
            itemExistsInCart = true;
            items[i].count += 1;

            break;
        }
    }

    if(!itemExistsInCart) {
        itemToAdd.count = 1;
        items.push(itemToAdd);
    }

    return items;
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_CART_VISIBILITY':
            return {
                ...state,
                showCart: !state.showCart
            };
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default: 
            return state;
    }
}

export default cartReducer;