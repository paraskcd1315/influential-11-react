/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';

import WidgetMaker from '../individualComponents/WidgetMaker';

const Weather = ({
	weatherReducer,
	storageReducer,
	timeReducer,
	startMenu
}) => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

	const style = () => {
		let color_1,
			color_2 = !prefersDarkScheme.matches ? '#F8F8F8' : '#202020';
		if (
			weatherReducer.now.condition.code <= 18 ||
			weatherReducer.now.condition.code === 26 ||
			weatherReducer.now.condition.code === 35 ||
			weatherReducer.now.condition.code >= 37
		) {
			color_1 = !prefersDarkScheme.matches ? '#60CDFF' : '#2F93DE';
		} else {
			color_1 = '#005FB8';
		}

		return {
			backgroundColor: color_2,
			backgroundImage:
				'linear-gradient(to bottom right,' + color_2 + ',' + color_1 + ')'
		};
	};

	const weatherContent = () => {
		return startMenu ? (
			<>
				<div className='weather-header'>
					<div className='weather-location-icon'>
						<i className='icon-ic_fluent_home_24_regular'></i>
					</div>
					<div className='weather-location'>
						{weatherReducer.metadata.address.city},{' '}
						{weatherReducer.metadata.address.state},{' '}
						{weatherReducer.metadata.address.countryISOCode}
					</div>
				</div>
				<div className='weather-content'>
					<div className='weather-left'>
						<div className='weather-condition-icon'>
							<img
								src={`assets/weatherIcons/${weatherReducer.now.condition.code}.svg`}
								alt={weatherReducer.now.condition.description}
							/>
						</div>
						<div className='weather-temperature'>
							{weatherReducer.now.temperature.current}
							<span>°{weatherReducer.units.temperature}</span>
						</div>
					</div>
					<div className='weather-right'>
						<div className='weather-condition'>
							{weatherReducer.now.condition.description}
						</div>
						<span>
							<i className='icon-ic_fluent_drop_24_regular'></i>
							{weatherReducer.now.temperature.relativeHumidity}
							{''}%
						</span>
					</div>
				</div>
			</>
		) : (
			''
		);
	};

	return (
		<WidgetMaker
			id={'weatherWidget'}
			className={startMenu ? 'startWidget' : 'desktopWidget'}
			title={'Weather'}
			showPinButton={!startMenu}
			showMaximiseButton={!startMenu}
			startMenu={startMenu}
			style={style()}
			content={weatherContent()}
		/>
	);
};

const mapStateToProps = (state) => ({
	weatherReducer: state.weatherReducer,
	storageReducer: state.storageReducer,
	timeReducer: state.timeReducer
});

export default connect(mapStateToProps, null)(Weather);
