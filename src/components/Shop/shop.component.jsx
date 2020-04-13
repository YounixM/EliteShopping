import React from 'react';
import { Route } from 'react-router-dom';

import '../../assets/styles/shop.scss';
import CollectionOverview from '../CollectionOverview/collectionOverview.component';
import CollectionCategory from '../CollectionCategory/collectionCategory.component';

export default function Shop(props) {
    return (
        <div className='shop'>
            <Route exact path={`${props.match.path}`} component={CollectionOverview} />
            <Route path={`${props.match.path}/:collectionCategoryId`} component={CollectionCategory} />
        </div>
    )
}