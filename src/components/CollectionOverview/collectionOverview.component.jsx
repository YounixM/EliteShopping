import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItemsForPreview } from '../../redux/collection/collection.selector';
import CollectionPreview from '../CollectionPreview/collectionPreview.component';
import '../../assets/styles/collection-overview.scss';

function CollectionOverview (props) {
    return (
        <div className='collections-overview'>
                {
                    props.collection && props.collection.map((collection) => {
                        return  <CollectionPreview 
                                    collection={collection} 
                                    key={collection.id}    
                                />
                    })
                }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collection: selectCollectionItemsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);