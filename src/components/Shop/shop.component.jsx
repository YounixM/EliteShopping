import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionItems } from '../../redux/collection/collection.selector';

import CollectionPreview from '../CollectionPreview/collectionPreview.component';


import '../../assets/styles/shop.scss';

class Shop extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className='shop'>
                {
                    this.props.collection.map((collection) => {
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

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionItems
})


export default connect(mapStateToProps)(Shop);