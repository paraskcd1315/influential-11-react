import { combineReducers } from 'redux';
import timeReducer from './timeReducers';
import weatherReducer from './weatherReducer';
import mediaReducer from './mediaReducer';
import appsReducer from './appsReducer';

export default combineReducers({
	timeReducer,
	weatherReducer,
	mediaReducer,
	appsReducer
});
