import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import '../../assets/styles/shop.scss';

import { fetchCollectionsAsync } from '../../redux/collection/collection.actions';
import { selectIsFetchingCollectionItems } from '../../redux/collection/collection.selector';

import WithSpinner from '../../components/Base/Spinner/spinner.component';

import CollectionOverview from '../CollectionOverview/collectionOverview.component';
import CollectionCategory from '../CollectionCategory/collectionCategory.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionCategory);

class Shop extends Component { 
    componentDidMount () {
        this.props.fetchCollectionsAsync();
    }

    render () {
        const { match, isFetching } = this.props;
        return (
            <div className='shop'>
                <Route exact path={`${match.path}`}
                    render={props => (
                    <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
                    )}
                />
                <Route path={`${match.path}/:collectionCategoryId`}
                    render={props => (
                    <CollectionPageWithSpinner isLoading={isFetching} {...props} />
                    )}    
                />
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetchingCollectionItems
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);