import collectionActionTypes from './collection.types';

export const getCollection = () => ({
    type: collectionActionTypes.GET_COLLECTION
})

export const updateCollections = (payload) => ({
    type: collectionActionTypes.UPDATE_COLLECTION_ITEMS,
    payload: payload
})