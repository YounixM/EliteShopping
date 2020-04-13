import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collections => collections.collection
)

export const selectCollectionItem = collectionUrlParam => 
    createSelector(
        [selectCollection],
        collections =>
            collections.collection[collectionUrlParam]
    );

export const selectCollectionItemsForPreview = createSelector(
    [selectCollectionItems],
    collectionsMap => Object.keys(collectionsMap).map(key => collectionsMap[key])
)