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
            items[i].quantity += 1;

            break;
        }
    }

    if(!itemExistsInCart) {
        itemToAdd.quantity = 1;
        items.push(itemToAdd);
    }

    return items;
}

function removeItemFromCart (currentCartItems, itemToRemove) {
    let items = [...currentCartItems];

    for(let i=0; i< items.length; i++)  {
        if(items[i].id === itemToRemove.id) {
            items.splice(i,1);
            break;
        }
    }

    return items;
}

function reduceItemQuantityFromCart(currentCartItems, itemDetails) {
    let items = [...currentCartItems];

    for(let i=0; i< items.length; i++)  {
        if(items[i].id === itemDetails.id) {
            if(items[i].quantity > 1) {
                items[i].quantity -= 1;
            } else {
                items.splice(i, 1);
            }

            break;
        }
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
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case 'REDUCE_ITEM_QUANTITY_FROM_CART':
            return {
                ...state,
                cartItems: reduceItemQuantityFromCart(state.cartItems, action.payload)
            };
        default: 
            return state;
    }
}

export default cartReducer;