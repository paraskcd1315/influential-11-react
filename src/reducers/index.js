import { combineReducers } from 'redux';
import timeReducer from './timeReducers';
import weatherReducer from './weatherReducer';
import mediaReducer from './mediaReducer';
import appsReducer from './appsReducer';
import commsReducer from './commsReducer';
import resourcesReducer from './resourcesReducer';
import storageReducer from './storageReducer';
import componentsReducer from './componentsReducers';

export default combineReducers({
	timeReducer,
	weatherReducer,
	mediaReducer,
	appsReducer,
	commsReducer,
	resourcesReducer,
	storageReducer,
	componentsReducer
});
