import collectionActionTypes from './collection.types';

const INITIAL_STATE = {
    collection: {}
}

const collectionReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case collectionActionTypes.UPDATE_COLLECTION_ITEMS:
            return {
                ...state,
                collection: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer;