/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';
import CCButton from './individualComponents/CCButton';

const ControlCenter = ({
	commsReducer,
	systemReducer,
	resourcesReducer,
	ccStyle
}) => {
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

	return (
		<div id='controlCenter' style={ccStyle}>
			<div className='header'>
				<CCButton
					isEnabled={commsReducer.telephony.airplaneMode}
					toggleName='Airplane Mode'
					toggleIcon={'icon-ic_fluent_airplane_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/airplaneMode')
					}
				/>
				<CCButton
					isEnabled={commsReducer.wifi.enabled}
					toggleName='Wifi'
					toggleIcon={'icon-ic_fluent_wifi_1_24_regular'}
					toggleCallback={() =>
						(window.location.href = 'mk1://runscript/InfluentialScript/wifi')
					}
				/>
				<CCButton
					isEnabled={commsReducer.bluetooth.enabled}
					toggleName='Bluetooth'
					toggleIcon={'icon-ic_fluent_bluetooth_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/bluetooth')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Cellular Data'
					toggleIcon={'icon-ic_fluent_cellular_data_1_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/cellularData')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='DarkMode'
					toggleIcon={'icon-ic_fluent_dark_theme_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/darkMode')
					}
				/>
				<CCButton
					isEnabled={systemReducer.isLowPowerModeEnabled}
					toggleName='Battery Saver'
					toggleIcon={'icon-ic_fluent_battery_saver_20_regular'}
					toggleCallback={() =>
						(window.location.href = 'mk1://runscript/InfluentialScript/lpm')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Device Lock'
					toggleIcon={'icon-ic_fluent_lock_closed_24_regular'}
					toggleCallback={() =>
						(window.location.href = 'mk1://runscript/InfluentialScript/lock')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Respring'
					toggleIcon={'icon-ic_fluent_arrow_reset_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/respring')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Safe Mode'
					toggleIcon={'icon-ic_fluent_warning_24_regular'}
					toggleCallback={() =>
						(window.location.href =
							'mk1://runscript/InfluentialScript/safemode')
					}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Refresh Widget'
					toggleIcon={'icon-ic_fluent_arrow_counterclockwise_24_regular'}
					// eslint-disable-next-line
					toggleCallback={() => (window.location.href = window.location.href)}
				/>
				<CCButton
					isEnabled={false}
					toggleName='Reset Widget'
					toggleIcon='icon-ic_fluent_history_24_regular'
					toggleCallback={() => {
						let popup = window.confirm(
							'This Option will erase everything you have saved like Pinned Apps and all the Settings, are you sure you want to proceed?'
						);
						if (popup) {
							localStorage.removeItem('FluentUI');
							// eslint-disable-next-line
							window.location.href = window.location.href;
						}
					}}
				/>
			</div>
			<div className='footer'>
				<div className='batteryInfo'>
					<div className='batteryIcon'>{renderBattery()}</div>
					<div className='batteryPercentage'>
						{resourcesReducer.battery['percentage']}%
					</div>
				</div>
				<div className='cc-tabs'>
					<i
						className='apps icon-ic_fluent_settings_24_regular'
						onClick={() =>
							window.api.apps.launchApplication('com.apple.Preferences')
						}></i>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	commsReducer: state.commsReducer,
	systemReducer: state.systemReducer,
	resourcesReducer: state.resourcesReducer
});

export default connect(mapStateToProps, null)(ControlCenter);
