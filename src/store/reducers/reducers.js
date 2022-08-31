import authReducer from './authReducer';
import postReducer from './postReducer';
import changeReducer from './changeReducer';
import { combineReducers } from 'redux';
// Combiniamo i reducer insieme
const mainReducer = combineReducers({
  authReducer,
  postReducer,
  changeReducer
})

export default mainReducer;