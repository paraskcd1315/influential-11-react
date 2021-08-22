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
	timeReducer: { hours, minutes, ampm },
	appsReducer: { allApplications },
	storageReducer: { dockIcons, extraValues },
	commsReducer,
	resourcesReducer: { battery },
	componentsReducer: { ccOpen, startMenuOpen },
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
				className={ccOpen ? 'status-bar active' : 'status-bar'}
				onClick={(e) => {
					e.preventDefault();
					buttonAnimate(e);
					if (ccOpen) {
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
		let battLevel = Math.ceil(battery['percentage'] / 10);
		switch (battery['state']) {
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
			for (let j = 0; j < allApplications.length; j++) {
				if (allApplications[j].identifier === dockIcons[i]) {
					apps.push(allApplications[j]);
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
							{hours}:{minutes}{' '}
							{!extraValues
								? ampm
								: !extraValues.twentyFourHourTime
								? ampm
								: ''}
						</div>
					</div>
				</div>
				<div className='center-part'>
					<div
						className={startMenuOpen ? 'start-button active' : 'start-button'}
						onClick={(e) => {
							e.preventDefault();
							buttonAnimate(e);
							if (startMenuOpen) {
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

const mapStateToProps = (state) => ({
	timeReducer: state.timeReducer,
	appsReducer: state.appsReducer,
	storageReducer: state.storageReducer,
	commsReducer: state.commsReducer,
	resourcesReducer: state.resourcesReducer,
	componentsReducer: state.componentsReducer
});

export default connect(mapStateToProps, { openStartMenu, openCC })(Taskbar);
