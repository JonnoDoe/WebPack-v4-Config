//Import
//------------------------------------------------------------------------------
import {createStore} from 'redux';
import rootReducer from '../reducers/index';

//Code
//------------------------------------------------------------------------------
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}