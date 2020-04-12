import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../assets/styles/cart.scss';

import CustomButton from '../Base/Button/button.component';
import CartItem from '../CartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

class Cart extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <div className='cart-dropdown'>
                {this.props.cartItems.length > 0 && <div className="cart-items"> 
                        {
                            this.props.cartItems.map((item) => {
                                return <CartItem key={item.id} item={item}/>
                            })
                        }
                    </div>
                }

                {this.props.cartItems.length === 0 &&
                    <span className='no-items'> No items in cart </span>
                }

                <CustomButton>CHECKOUT</CustomButton>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(
    mapStateToProps
)(Cart);