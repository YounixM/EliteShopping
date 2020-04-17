import collectionActionTypes from './collection.types';

const INITIAL_STATE = {
    collection: {},
    isFetching: false,
    errorMessage: ''
}

const collectionReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case collectionActionTypes.FETCHING_COLLECTION_ITEMS:
            return {
                ...state,
                isFetching: true
            }
        case collectionActionTypes.FETCHED_COLLECTION_ITEMS:
            return {
                ...state,
                isFetching: false,
                collection: action.payload
            }
        case collectionActionTypes.FAILED_TO_FETCH_COLLECTION_ITEMS:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer;