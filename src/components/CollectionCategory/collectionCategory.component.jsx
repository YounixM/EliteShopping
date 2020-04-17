import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionItem } from '../../redux/collection/collection.selector';
import CollectionItem from '../CollectionItem/collectionItem.component';

import '../../assets/styles/collection-category.scss';

function CollectionCategory (props) {
    return (
        <div className='collection-category'>
            {
                props.collection && props.collection.items.map((collectionItem) => {
                        return <CollectionItem item={collectionItem} key={collectionItem.id}/>
                    })
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionItem(ownProps.match.params.collectionCategoryId)(state)
});

export default connect(mapStateToProps)(CollectionCategory);