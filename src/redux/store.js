import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducer";

const middleware = [thunk];

const composeEnhancers = 
  typeof window === 'object' && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
  
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

const rootReducer = combineReducers({
   mainReducer
})

export const store = createStore(rootReducer, enhancer);