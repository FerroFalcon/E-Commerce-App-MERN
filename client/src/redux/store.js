import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productReducer } from './reducers/productReducer';
const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
 productReducer,
})

const store = createStore(
 rootReducer, 
 composeEnhancers(
  applyMiddleware(thunk)
 )
)

export default store;