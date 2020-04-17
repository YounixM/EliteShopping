import { createStore, applyMiddleware } from 'redux';
import logger  from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middleWares = [ logger, thunk ];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export { store , persistor };