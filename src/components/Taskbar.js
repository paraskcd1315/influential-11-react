/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { openStartMenu } from '../actions/components';
import { openCC } from '../actions/components';

import App from './individualComponents/App';

const Taskbar = ({
	timeReducer,
	appsReducer,
	storageReducer,
	commsReducer,
	resourcesReducer,
	componentsReducer,
	openStartMenu,
	buttonAnimate,
	openCC,
	hideStartMenu,
	hideCC
}) => {
	const wifiBars = [
		'icon-ic_fluent_wifi_4_24_regular',
		'icon-ic_fluent_wifi_3_24_regular',
		'icon-ic_fluent_wifi_2_24_regular',
		'icon-ic_fluent_wifi_1_24_regular'
	];

	const telephonyBars = [
		'icon-ic_fluent_cellular_data_5_24_regular',
		'icon-ic_fluent_cellular_data_4_24_regular',
		'icon-ic_fluent_cellular_data_3_24_regular',
		'icon-ic_fluent_cellular_data_2_24_regular',
		'icon-ic_fluent_cellular_data_1_24_regular'
	];

	const batteryCharging = 'icon-ic_fluent_battery_charge_24_regular';

	const batteryBars = [
		'icon-ic_fluent_battery_0_24_regular',
		'icon-ic_fluent_battery_1_24_regular',
		'icon-ic_fluent_battery_2_24_regular',
		'icon-ic_fluent_battery_3_24_regular',
		'icon-ic_fluent_battery_4_24_regular',
		'icon-ic_fluent_battery_5_24_regular',
		'icon-ic_fluent_battery_6_24_regular',
		'icon-ic_fluent_battery_7_24_regular',
		'icon-ic_fluent_battery_8_24_regular',
		'icon-ic_fluent_battery_9_24_regular',
		'icon-ic_fluent_battery_full_24_regular'
	];

	const fullyCharged = 'icon-ic_fluent_battery_full_24_regular';

	const renderComms = () => {
		return (
			<div
				className={
					componentsReducer.ccOpen ? 'status-bar active' : 'status-bar'
				}
				onClick={(e) => {
					e.preventDefault();
					buttonAnimate(e);
					if (componentsReducer.ccOpen) {
						hideCC();
						setTimeout(() => {
							openCC(false);
						}, 250);
					} else {
						openCC(true);
					}
				}}>
				{commsReducer.telephony.airplaneMode ? (
					<i className={'icon-ic_fluent_airplane_24_regular statusIcons'}></i>
				) : commsReducer.telephony.type === '' ? (
					''
				) : (
					<i
						className={
							telephonyBars[commsReducer.telephony.bars - 1] + ' statusIcons'
						}></i>
				)}
				{commsReducer.wifi.enabled ? (
					<i className={wifiBars[commsReducer.wifi.bars] + ' statusIcons'}></i>
				) : (
					''
				)}
				{renderBattery()}
			</div>
		);
	};

	const renderBattery = () => {
		let battLevel = Math.ceil(resourcesReducer.battery['percentage'] / 10);
		switch (resourcesReducer.battery['state']) {
			default:
				return <i className={batteryBars[battLevel] + ' statusIcons'}></i>;

			case 1:
				return <i className={batteryCharging + ' statusIcons'}></i>;

			case 2:
				return <i className={fullyCharged + ' statusIcons'}></i>;
		}
	};

	const renderApps = () => {
		let apps = [];

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < appsReducer['allApplications'].length; j++) {
				if (
					appsReducer['allApplications'][j].identifier ===
					storageReducer['dockIcons'][i]
				) {
					apps.push(appsReducer['allApplications'][j]);
				}
			}
		}

		return apps.map((app) => {
			return (
				<App
					key={app.identifier + 'favApp'}
					identifier={app.identifier}
					badge={app.badge}
					icon={app.icon}
					name={app.name}
					className={'favApp'}
					hideName={true}
					buttonAnimate={buttonAnimate}
					hideStartMenu={hideStartMenu}
				/>
			);
		});
	};

	return (
		<div id='taskbar'>
			<div className='top-part'>
				<div className='left-part'>
					<div className='timeDate'>
						<div className='time'>
							{timeReducer.hours}:{timeReducer.minutes}
						</div>
					</div>
				</div>
				<div className='center-part'>
					<div
						className={
							componentsReducer.startMenuOpen
								? 'start-button active'
								: 'start-button'
						}
						onClick={(e) => {
							e.preventDefault();
							buttonAnimate(e);
							if (componentsReducer.startMenuOpen) {
								hideStartMenu();
								setTimeout(() => {
									openStartMenu(false);
								}, 250);
							} else {
								openStartMenu(true);
							}
						}}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className='right-part'>{renderComms()}</div>
			</div>
			<div className='bottom-part'>{renderApps()}</div>
		</div>
	);
};

Taskbar.propTypes = {
	openStartMenu: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { openStartMenu, openCC })(Taskbar);
