import collectionActionTypes from './collection.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const getCollection = () => ({
    type: collectionActionTypes.GET_COLLECTION
})

export const fetchCollections = () => ({
    type: collectionActionTypes.FETCHING_COLLECTION_ITEMS
})

export const fetchedCollections = collectionsMap => ({
    type: collectionActionTypes.FETCHED_COLLECTION_ITEMS,
    payload: collectionsMap
})

export const failedToFetchCollections = errorMessage => ({
    type: collectionActionTypes.FAILED_TO_FETCH_COLLECTION_ITEMS,
    payload: errorMessage
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollections());

        collectionRef.get()
            .then(snapShot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapShot);
                dispatch(fetchedCollections(collectionsMap))
            })
            .catch(err => {
                dispatch(failedToFetchCollections(err.message))
            })
    };
}