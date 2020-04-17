import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import '../../assets/styles/shop.scss';
import { updateCollections } from '../../redux/collection/collection.actions';
import WithSpinner from '../../components/Base/Spinner/spinner.component';

import CollectionOverview from '../CollectionOverview/collectionOverview.component';
import CollectionCategory from '../CollectionCategory/collectionCategory.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionCategory);



class Shop extends Component { 

    constructor (props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount () {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async (snapShot) => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            this.props.updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render () {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop'>
                <Route exact path={`${match.path}`}
                    render={props => (
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                    )}
                />
                <Route path={`${match.path}/:collectionCategoryId`}
                    render={props => (
                    <CollectionPageWithSpinner isLoading={loading} {...props} />
                    )}    
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(
    null,
    mapDispatchToProps
)(Shop);