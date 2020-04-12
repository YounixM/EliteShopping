import React from 'react';
import '../../assets/styles/cart-item.scss';

export default function CartItem(props) {
    let { item } = props;

    return (
        <div className='cart-item'>
            <img src={item.imageUrl} alt='item'/>
            <div className="item-details">
                <span className="name">{item.name}</span>
                <span className="price"> {item.quantity} x ${item.price}</span>
            </div>
        </div>
    )
}
