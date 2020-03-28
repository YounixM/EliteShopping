import React, { Component } from 'react';
import DEFAULT_COLLECTION_DATA from './shop.data';
import CollectionPreview from '../CollectionPreview/collectionPreview.component';

import '../../assets/styles/shop.scss';

export default class Shop extends Component {
    constructor (props) {
        super(props);

        this.state = {
            collections: DEFAULT_COLLECTION_DATA
        }
    }

    render() {
        return (
            <div className='shop'>
                {
                    this.state.collections.map((collection) => {
                        return  <CollectionPreview 
                                    collection={collection} 
                                    key={collection.id}    
                                />
                    })
                }
            </div>
        )
    }
}
