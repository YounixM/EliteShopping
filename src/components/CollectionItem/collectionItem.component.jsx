import React, { Component } from 'react';
import '../../assets/styles/collection-item.scss';

export default class CollectionItem extends Component {
    render() {
        const { item } = this.props
        return (
            <div className='collection-item'>
                    <div 
                        className="image"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`
                        }}
                    >

                    </div>

                    <div className="collection-footer">
                        <div className="name"> {item.name} </div>
                        <div className="price"> $ {item.price} </div>
                    </div>
            </div>
        )
    }
}
