import React, { Component } from 'react';

import '../../assets/styles/collection-preview.scss';
import CollectionItem from '../CollectionItem/collectionItem.component';

export default class CollectionPreview extends Component {
    render() {
        const { collection } = this.props;

        return (
            <div className='collection-preview'>
                <div className="title"> {collection.title.toUpperCase()} </div>
                <div className="preview">
                    {
                        collection.items
                            .filter((collectionItem, idx) => idx < 4)
                            .map((collectionItem) => {
                                return <CollectionItem item={collectionItem} key={collectionItem.id}/>
                            })
                    }
                </div>
            </div>
        )
    }
}
