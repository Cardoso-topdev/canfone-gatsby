import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'
import Shop from './containers';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();    
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancer(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>
  , document.getElementById("shop")
)
