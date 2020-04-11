import React, { Component } from 'react';
import '../../assets/styles/collection-item.scss';

import CustomButton from '../Base/Button/button.component';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

class CollectionItem extends Component {
    render() {
        const { item, addItemToCart } = this.props
        return (
            <div className='collection-item'>
                    <div 
                        className="image"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`
                        }}
                    >
                        <CustomButton customStyles='inverted' onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
                    </div>

                    <div className="collection-footer">
                        <div className="name"> {item.name} </div>
                        <div className="price"> $ {item.price} </div>
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);