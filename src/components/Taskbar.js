import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openStartMenu } from '../actions/components';

const Taskbar = ({
	timeReducer,
	appsReducer,
	storageReducer,
	commsReducer,
	resourcesReducer,
	componentsReducer,
	openStartMenu
}) => {
	const [activeStart, setStartActiveToggle] = useState(false);

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

	const buttonAnimate = (e) => {
		e.target.style.transform = 'scale(0.8)';
		setTimeout(() => {
			e.target.style.transform = 'scale(1.0)';
		}, 100);
	};

	const renderComms = () => {
		return (
			<>
				<i
					className={
						telephonyBars[commsReducer.telephony.bars - 1] + ' statusIcons'
					}></i>
				<i className={wifiBars[commsReducer.wifi.bars] + ' statusIcons'}></i>
			</>
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
				<div
					id={app.identifier}
					key={app.identifier}
					className='favApp'
					onClick={(e) => {
						e.preventDefault();
						buttonAnimate(e);
						window.api.apps.launchApplication(app.identifier);
					}}>
					{app.badge !== '' ? <div className='badge'></div> : ''}
					<div className='icon'>
						<img src={app.icon} alt={app.identifier} />
					</div>
				</div>
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
						className={activeStart ? 'start-button active' : 'start-button'}
						onClick={(e) => {
							e.preventDefault();
							buttonAnimate(e);
							openStartMenu(!componentsReducer.startMenuOpen);
							setStartActiveToggle(!activeStart);
						}}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className='right-part'>
					{renderComms()}
					{renderBattery()}
				</div>
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

export default connect(mapStateToProps, { openStartMenu })(Taskbar);
