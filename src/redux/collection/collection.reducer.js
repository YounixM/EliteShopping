import COLLECTION_DATA from '../../assets/data/collection.data';

const INITIAL_STATE = {
    collection: COLLECTION_DATA
}

const collectionReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        default:
            return state
    }
}

export default collectionReducer;