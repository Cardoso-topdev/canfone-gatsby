
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas'
import Shop from './containers';

const sagaMiddleware = createSagaMiddleware();    
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default function ShopComponent() {
  return <Provider store={store}>
          <Shop />
        </Provider>
}


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// if (typeof window !== 'undefined') {
//   const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
//   console.log("ReactDom: ", renderMethod);

//   renderMethod(
//   <Provider store={store}>
//     <Shop />
//   </Provider>,
//   document.getElementById('shop')
// );
// }

  // ReactDOM.render(<Provider store={store}>
  //   <Shop />
  //   <div>Successfullly Injected!!!!</div>
  // </Provider>
  // , document.getElementById("shop"));

// renderMethod(
//   <Provider store={store}>
//     <Shop />
//     <div>Successfullly Injected!!!!</div>
//   </Provider>,
//   document.getElementById('shop')
// );