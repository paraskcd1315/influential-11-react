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
	components: { startMenuOpen, ccOpen, showMenu },
	storage
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
				twentyfour: !storage.extraValues
					? false
					: !storage.extraValues.twentyFourHourTime
					? false
					: true,
				zeroPadding: true,
				callback: (t) => {
					updateTime({
						hours: t.hour(),
						minutes: t.minute(),
						date: t.dateNum(),
						month: t.sMonthText(),
						ampm: t.ampm(),
						rawHour: t.rawHour()
					});
				}
			});
		}, 1000);

		return () => {
			clearInterval(newTime);
		};
	}, [updateTime, storage]);

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

	const [hideExplorerBGStyle, sethideExplorerBGStyle] = useState('');
	const [hideExplorerFolderTitleStyle, sethideExplorerFolderTitleStyle] =
		useState('');
	const [hideWeatherGradientStyle, sethideWeatherGradientStyle] = useState('');
	const [compactifyWeatherStyle, setcompactifyWeatherStyle] = useState('');

	useEffect(() => {
		sethideExplorerBGStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.hideExplorerBG) {
					newState += `
						#explorerWidget:before {
							content: unset;
							backdrop-filter: unset;
							-webkit-backdrop-filter: unset;
						}
						#explorerWidget {
							background-color: transparent;
							border: none!important;
							box-shadow: unset;
						}
					`;
				}
			}
			return newState;
		});
		sethideExplorerFolderTitleStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.hideExplorerFolderTitle) {
					newState += `
						#explorerWidget .explorer-header {
							display: none;
						}
					`;
				}
			}
			return newState;
		});
		sethideWeatherGradientStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableGradient) {
					newState += `
						#weatherWidget {
							background-color: rgba(253, 253, 253, 0.4)!important;
							background-image: unset!important;
						}

						@media (prefers-color-scheme: dark) {
							#weatherWidget {
								background-color: rgba(57, 57, 57, 0.5)!important;
							}
						}
					`;
				}
			}
			return newState;
		});
		setcompactifyWeatherStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.compactifyWeather) {
					newState += `
						#weatherWidget .widget-header, #weatherWidget .widget-content{
							padding: 0.3rem 1rem;
						}
						#weatherWidget.desktopWidget .weather-content .weather-daily {
							margin-top: 1.2rem;
						}
						#weatherWidget.desktopWidget .weather-left img {
							width: 60px;
							height: 60px;
						}
					`;
				}
			}
			return newState;
		});
		//eslint-disable-next-line
	}, [storage]);

	return (
		<>
			{/* <div
				className='wallpaper'
				style={{
					backgroundImage: 'url(https://wallpapercave.com/wp/wp8791332.jpg)',
					width: '100vw',
					height: '100vh',
					backgroundSize: 'contain',
					zIndex: -1,
					position: 'absolute'
				}}></div> */}
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
			{storage.extraValues && storage.extraValues.hideExplorerBG ? (
				<style id='hideExplorerBG'>{hideExplorerBGStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.hideExplorerFolderTitle ? (
				<style id='hideExplorerFolderTitle'>
					{hideExplorerFolderTitleStyle}
				</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableGradient ? (
				<style id='disableGradient'>{hideWeatherGradientStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.compactifyWeather ? (
				<style id='compactifyWeather'>{compactifyWeatherStyle}</style>
			) : (
				''
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	components: state.componentsReducer,
	storage: state.storageReducer
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
