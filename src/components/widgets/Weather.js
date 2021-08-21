/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';

import WidgetMaker from '../individualComponents/WidgetMaker';

const Weather = ({ weatherReducer, storageReducer, startMenu }) => {
	const weatherContent = () => {};

	return (
		<WidgetMaker
			id={'weatherWidget'}
			className={startMenu ? 'startWidget' : 'desktopWidget'}
			title={'Weather'}
			showPinButton={!startMenu}
			showMaximiseButton={!startMenu}
			startMenu={startMenu}
		/>
	);
};

const mapStateToProps = (state) => ({
	weatherReducer: state.weatherReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, null)(Weather);
