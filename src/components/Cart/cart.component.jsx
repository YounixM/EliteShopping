import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import '../../assets/styles/cart.scss';

import CustomButton from '../Base/Button/button.component';
import CartItem from '../CartItem/cartItem.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';

class Cart extends Component {
    constructor (props) {
        super(props);
        this.handleCheckoutBtnClick = this.handleCheckoutBtnClick.bind(this);
    }

    handleCheckoutBtnClick = () => {
        let { history } = this.props;

        history.push('/checkout');

        this.props.dispatch(toggleCartVisibility());
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
                
                <CustomButton customStyles='checkoutBtn' onClick={this.handleCheckoutBtnClick}>CHECKOUT</CustomButton>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));