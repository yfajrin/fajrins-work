import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage'
import { rootSaga } from './root.saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] 
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger, 
    sagaMiddleware
    ].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || 
    compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)