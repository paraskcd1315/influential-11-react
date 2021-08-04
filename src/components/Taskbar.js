import React, { useState } from 'react';
import { connect } from 'react-redux';

const Taskbar = ({
	timeReducer,
	appsReducer,
	storageReducer,
	commsReducer
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
							setStartActiveToggle(!activeStart);
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

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(Taskbar);
