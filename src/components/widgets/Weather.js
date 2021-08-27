/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DraggableCore } from 'react-draggable';

import WidgetMaker from '../individualComponents/WidgetMaker';
import { openWeather } from '../../actions/widget';
import { addValue } from '../../actions/storage';
import { removeValue } from '../../actions/storage';

const Weather = ({
	weatherReducer,
	storageReducer: { extraValues },
	widgetReducer: { weatherOpen },
	timeReducer: { date, rawHour },
	startMenu,
	openWeather,
	addValue,
	removeValue,
	hideStartMenu
}) => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

	const mainStyle = () => {
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
			maxHeight: !startMenu ? '200px' : null,
			backgroundColor: color_2,
			backgroundImage:
				'linear-gradient(to bottom right,' + color_2 + ',' + color_1 + ')',
			opacity: !startMenu ? 0 : null,
			transform: !startMenu
				? !extraValues
					? 'translate(-50%, 0px)'
					: !extraValues.Weather
					? 'translate(-50%, 0px)'
					: `translate(-50%, ${extraValues.Weather}px)`
				: null
		};
	};

	const [style, setStyle] = useState(mainStyle());

	useEffect(() => {
		if (weatherOpen && !startMenu) {
			setTimeout(() => {
				setStyle((state) => {
					return {
						...state,
						opacity: 1
					};
				}, 250);
			});
		}
	}, [weatherOpen, startMenu]);

	const [yPosition, setYPosition] = useState({
		currentY: 0,
		initialY: 0,
		yOffset: !extraValues ? 0 : !extraValues.Weather ? 0 : extraValues.Weather
	});

	const [maximize, setMaximize] = useState(false);

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
			<div className='weather-stuff'>
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
				<div className='weather-content'>
					{weatherReducer.daily
						.slice(0, 4)
						.map(({ dayOfWeek, condition, temperature }, index) => {
							return (
								<div key={dayOfWeek} id={dayOfWeek} className='weather-daily'>
									<div className='weather-day'>
										{index === 0
											? 'Today'
											: dayOfWeek.substring(0, 3) +
											  ' ' +
											  (parseInt(date) + index)}
									</div>
									<div className='weather-condition-icon'>
										<img
											src={`assets/weatherIcons/${condition.code}.svg`}
											alt={condition.description}
										/>
									</div>
									<div className='weather-temperature'>
										{temperature.minimum}
										<span>°{weatherReducer.units.temperature}</span>
									</div>
									<div className='weather-temperature'>
										{temperature.maximum}
										<span>°{weatherReducer.units.temperature}</span>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	};

	return startMenu ? (
		<WidgetMaker
			id={'weatherWidget'}
			className={startMenu ? 'startWidget' : 'desktopWidget'}
			title={'Weather'}
			showPinButton={!startMenu}
			showMaximiseButton={!startMenu}
			startMenu={startMenu}
			style={style}
			content={weatherContent()}
			hideStartMenu={hideStartMenu}
			onStartClick={() => {
				if (startMenu && (!extraValues || !extraValues.Weather)) {
					openWeather(true);
					addValue({
						key: 'Weather',
						value: 0
					});
				}
			}}
		/>
	) : (
		<DraggableCore
			handle='.widget-header-weatherWidget'
			cancel='.widget-buttons-right'
			onStart={(e, data) => {
				if (extraValues && extraValues.Weather) {
					setYPosition((state) => {
						return {
							...state,
							yOffset: extraValues.Weather
						};
					});
				}
				setYPosition((state) => {
					return {
						...state,
						initialY: data.y - state.yOffset
					};
				});
			}}
			onDrag={(e, data) => {
				setYPosition((state) => {
					return {
						...state,
						currentY: data.lastY - state.initialY,
						yOffset: data.lastY - state.initialY
					};
				});
				setStyle((state) => {
					return {
						...state,
						transform: `translate(-50%, ${yPosition.currentY}px)`,
						zIndex: 99
					};
				});
			}}
			onStop={() => {
				setStyle((state) => {
					return {
						...state,
						zIndex: null
					};
				});
				setYPosition((state) => {
					return {
						...state,
						initialY: state.currentY
					};
				});
				addValue({
					key: 'Weather',
					value: yPosition.yOffset
				});
			}}>
			<WidgetMaker
				id={'weatherWidget'}
				className={startMenu ? 'startWidget' : 'desktopWidget'}
				title={'Weather'}
				showMaximiseButton={!startMenu}
				startMenu={startMenu}
				style={style}
				content={weatherContent()}
				closeCallback={() => {
					setStyle((state) => {
						return {
							...state,
							opacity: 0
						};
					});
					setTimeout(() => {
						removeValue('Weather');
						openWeather(false);
					}, 250);
				}}
				maximize={maximize}
				maximizeCallback={() => {
					if (!maximize) {
						setMaximize(true);
						setStyle((state) => {
							return {
								...state,
								maxHeight: 500 + 'px'
							};
						});
					} else {
						setMaximize(false);
						setStyle((state) => {
							return {
								...state,
								maxHeight: 200 + 'px'
							};
						});
					}
				}}
			/>
		</DraggableCore>
	);
};

const mapStateToProps = (state) => ({
	weatherReducer: state.weatherReducer,
	storageReducer: state.storageReducer,
	widgetReducer: state.widgetReducer,
	timeReducer: state.timeReducer
});

export default connect(mapStateToProps, { openWeather, addValue, removeValue })(
	Weather
);
