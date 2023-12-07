// rootReducer.js

import { combineReducers } from 'redux';
import { Reducer } from './Reducer';


export default combineReducers({
  cart: Reducer,
  
});
