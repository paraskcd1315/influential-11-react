/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateTime } from '../actions/time';
import { updateApps } from '../actions/apps';
import { updateMedia } from '../actions/media';
import { updateWeather } from '../actions/weather';
import { updateComms } from '../actions/comms';
import { updateResources } from '../actions/resources';
import { updateSystem } from '../actions/system';

import { Time } from '../libs/Time';

import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Menu from './Menu';
import ControlCenter from './ControlCenter';
import Desktop from './Desktop';

const Common = ({
	updateTime,
	updateWeather,
	updateApps,
	updateMedia,
	updateComms,
	updateResources,
	updateSystem,
	components: { startMenuOpen, ccOpen, showMenu }
}) => {
	const buttonAnimate = (e) => {
		e.target.style.transform = 'scale(0.8)';
		setTimeout(() => {
			e.target.style.transform = 'scale(1.0)';
		}, 100);
	};
	window.api.apps.observeData((newAppData) => {
		updateApps(newAppData);
	});
	window.api.media.observeData((newMediaData) => {
		updateMedia(newMediaData);
	});
	window.api.weather.observeData((newWeatherData) => {
		updateWeather(newWeatherData);
	});
	window.api.comms.observeData((newCommData) => {
		updateComms(newCommData);
	});
	window.api.resources.observeData((newResourcesData) => {
		updateResources(newResourcesData);
	});
	window.api.system.observeData((newSystemData) => {
		updateSystem(newSystemData);
	});
	useEffect(() => {
		const newTime = setInterval(() => {
			Time({
				twentyfour: false,
				zeroPadding: true,
				callback: (t) => {
					updateTime({
						hours: t.hour(),
						minutes: t.minute(),
						date: t.dateNum(),
						month: t.sMonthText()
					});
				}
			});
		}, 1000);

		return () => {
			clearInterval(newTime);
		};
	}, [updateTime]);

	const [startMenuStyle, setStyle] = useState({
		opacity: 0,
		transform: 'translate(-50%, 50px)',
		transition: '150ms ease-out',
		pointerEvents: 'none'
	});

	useEffect(() => {
		if (startMenuOpen) {
			setTimeout(() => {
				setStyle((state) => {
					return {
						...state,
						opacity: 1,
						transform: 'translate(-50%, 0)',
						pointerEvents: null
					};
				});
			}, 250);
		}
	}, [startMenuOpen]);

	const hideStartMenu = () => {
		setStyle((state) => {
			return {
				...state,
				opacity: 0,
				transform: 'translate(-50%, 50px)',
				pointerEvents: 'none'
			};
		});
	};

	const [ccStyle, setCCStyle] = useState({
		opacity: 0,
		transform: 'translateX(-45%)',
		transition: '150ms ease-out',
		pointerEvents: 'none'
	});

	useEffect(() => {
		if (ccOpen) {
			setTimeout(() => {
				setCCStyle((state) => {
					return {
						...state,
						opacity: 1,
						transform: 'translateX(-50%)',
						pointerEvents: null
					};
				});
			}, 250);
		}
	}, [ccOpen]);

	const hideCC = () => {
		setCCStyle((state) => {
			return {
				...state,
				opacity: 0,
				transform: 'translateX(-45%)',
				pointerEvents: 'none'
			};
		});
	};

	const [menuStyle, setMenuStyle] = useState({
		opacity: 0,
		transform: 'translate(-50%, -40%)',
		pointerEvents: 'none'
	});

	useEffect(() => {
		if (showMenu) {
			setTimeout(() => {
				setMenuStyle((state) => {
					return {
						...state,
						opacity: 1,
						transform: 'translate(-50%, -50%)',
						pointerEvents: null
					};
				});
			});
		}
	}, [showMenu]);

	const hideMenu = () => {
		setMenuStyle((state) => {
			return {
				...state,
				opacity: 0,
				transform: 'translate(-50%, -40%)',
				pointerEvents: 'none'
			};
		});
	};

	return (
		<>
			<Desktop />
			<Taskbar
				buttonAnimate={buttonAnimate}
				hideStartMenu={hideStartMenu}
				hideCC={hideCC}
			/>
			{startMenuOpen ? (
				<StartMenu
					startMenuStyle={startMenuStyle}
					hideStartMenu={hideStartMenu}
				/>
			) : (
				''
			)}
			{showMenu ? <Menu menuStyle={menuStyle} hideMenu={hideMenu} /> : ''}
			{ccOpen ? <ControlCenter ccStyle={ccStyle} /> : ''}
		</>
	);
};

const mapStateToProps = (state) => ({
	components: state.componentsReducer
});

export default connect(mapStateToProps, {
	updateTime,
	updateWeather,
	updateApps,
	updateMedia,
	updateComms,
	updateResources,
	updateSystem
})(Common);
