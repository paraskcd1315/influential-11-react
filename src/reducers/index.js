/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import { combineReducers } from 'redux';
import timeReducer from './timeReducers';
import weatherReducer from './weatherReducer';
import mediaReducer from './mediaReducer';
import appsReducer from './appsReducer';
import commsReducer from './commsReducer';
import resourcesReducer from './resourcesReducer';
import storageReducer from './storageReducer';
import componentsReducer from './componentsReducers';
import menuReducer from './menuReducer';
import systemReducer from './systemReducer';
import widgetReducer from './widgetsReducer';
import explorerAppsReducer from './explorerAppsReducer';
import explorerCustomFolderReducer from './explorerCustomFolderReducer';
import colorPickerReducer from './colorPickerReducer';

export default combineReducers({
	timeReducer,
	weatherReducer,
	mediaReducer,
	appsReducer,
	commsReducer,
	resourcesReducer,
	storageReducer,
	componentsReducer,
	menuReducer,
	systemReducer,
	widgetReducer,
	explorerAppsReducer,
	explorerCustomFolderReducer,
	colorPickerReducer
});
