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

	const [blurRadiusStyle, setblurRadiusStyle] = useState('');
	const [borderRadiusStyle, setborderRadiusStyle] = useState('');
	const [hideIconLabelsStyle, setHideIconLabelsStyle] = useState('');
	const [hideExplorerBGStyle, sethideExplorerBGStyle] = useState('');
	const [hideExplorerFolderTitleStyle, sethideExplorerFolderTitleStyle] =
		useState('');
	const [hideWeatherGradientStyle, sethideWeatherGradientStyle] = useState('');
	const [compactifyWeatherStyle, setcompactifyWeatherStyle] = useState('');
	const [noiseToTaskbarStyle, setnoiseToTaskbarStyle] = useState('');
	const [disableTaskbarBorderStyle, setdisableTaskbarBorderStyle] =
		useState('');
	const [monochromeStartButtonStyle, setmonochromeStartButtonStyle] =
		useState('');
	const [noiseToStartmenuStyle, setnoiseToStartmenuStyle] = useState('');
	const [disableStartmenuBorderStyle, setdisableStartmenuBorderStyle] =
		useState('');
	const [noiseToWidgetsStyle, setnoiseToWidgetsStyle] = useState('');
	const [disableWidgetBorderStyle, setdisableWidgetBorderStyle] = useState('');
	const [noiseToActionCenterStyle, setnoiseToActionCenterStyle] = useState('');
	const [disableActionCenterBorderStyle, setdisableActionCenterBorderStyle] =
		useState('');
	const [noiseToMenuStyle, setnoiseToMenuStyle] = useState('');
	const [disableMenuBorderStyle, setdisableMenuBorderStyle] = useState('');
	const [compactifyMediaStyle, setcompactifyMediaStyle] = useState('');

	useEffect(() => {
		setHideIconLabelsStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.hideIconLabels) {
					newState += `
					#explorerWidget .explorer-apps .explorerFavApp, #explorerWidget .explorer-apps .explorerApp, #explorerWidget .explorer-apps .explorerFolder, #explorerWidget .explorer-apps .addApp, #explorerWidget .explorer-apps .folderApp, #explorerWidget .explorer-apps .pageApp {
						height: 71px;
					}
					`;
				}
			}
			return newState;
		});
		setblurRadiusStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.blurRadius) {
					newState += `
					#taskbar:before,
					#startMenu:before,
					.appMenu:before,
					.scrollHelper:before,
					#controlCenter:before,
					.widget:before {
						backdrop-filter: blur(${storage.extraValues.blurRadius}px) saturate(2);
						-webkit-backdrop-filter: blur(${storage.extraValues.blurRadius}px) saturate(2);
					}
					`;
				}
			}
			return newState;
		});
		setborderRadiusStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.borderRadius) {
					let difference = storage.extraValues.borderRadius - 0.4;
					let difference2 = storage.extraValues.borderRadius - 0.8;
					let difference3 = storage.extraValues.borderRadius - 1.1;
					if (difference < 0) {
						difference = 0;
					}
					if (difference2 < 0) {
						difference2 = 0;
					}
					if (difference3 > 0.2) {
						difference3 = 0.2;
					}
					if (difference3 < 0) {
						difference3 = 0;
					}
					newState = `
					#taskbar:before,
					#startMenu:before,
					.appMenu:before,
					.scrollHelper:before,
					#controlCenter:before,
					.widget:before,
					.appMenu,
					.scrollHelper,
					.widget,
					#taskbar,
					#startMenu,
					#controlCenter, 
					#explorerWidget .explorer-sidebar .sidebar-button, 
					#weatherWidget.desktopWidget .weather-content .weather-daily {
						border-radius: ${storage.extraValues.borderRadius}rem;
					}
					#taskbar .bottom-part {
						border-top-left-radius: ${difference}rem;
						border-top-right-radius: ${difference}rem;
						border-bottom-left-radius: ${storage.extraValues.borderRadius}rem;
						border-bottom-right-radius: ${storage.extraValues.borderRadius}rem;
					}
					.appMenu .settings, #controlCenter .header, #startMenu .startTabs {
						border-top-left-radius: ${storage.extraValues.borderRadius}rem;
						border-top-right-radius: ${storage.extraValues.borderRadius}rem;
						border-bottom-left-radius: ${difference}rem;
						border-bottom-right-radius: ${difference}rem;
					}
					#controlCenter .header button, #taskbar .center-part .start-button, #taskbar .right-part .status-bar, #startMenu .header button, #startMenu .searchbar {
						border-radius: ${difference2}rem;
					}
					#taskbar .center-part .start-button span {
						border-radius: ${difference3}rem;
					}
					`;
				}
			}
			return newState;
		});
		sethideExplorerBGStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.hideExplorerBG) {
					newState = `
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
					newState = `
						#explorerWidget .explorer-header {
							display: none;
						}
						#explorerWidget .explorer-sidebar {
							height: 150px;
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
					newState = `
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
					newState = `
						#weatherWidget .widget-header {
							height: 6rem;
						}
						#weatherWidget.maximized .widget-header {
							height: unset;
						}
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
		setcompactifyMediaStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.compactifyMedia) {
					newState = `
					#musicWidget .widget-header {
						height: 2rem;
					}
					#musicWidget .widget-content {
						padding: 1rem;
					}
					.media-artwork img {
						width: 90px;
						height: 90px;
					}
					.media-right button.previousTrack {
						display: none;
					}
					.media-right {
						left: 70%;
						margin-top: -65px;
					}
					.media-artwork:before {
						width: 90px;
						height: 100px;
					}
					.media-info .media-artist .text {
						width: 110px;
					}

					@media only screen and (max-height: 667px) {
						.media-info .media-artist .text {
							width: 68px;
						}
					}
					@media only screen and (max-height: 736px) { 
						.media-info .media-artist .text {
							width: 93px;
						}
					}
					@media only screen and (max-height: 780px) {
						.media-info .media-artist .text {
							width: 60px;
						}
					}
					@media only screen and (max-height: 812px) {
						.media-info .media-artist .text {
							width: 68px;
						}
					}
					@media only screen and (max-height: 844px) {
						.media-info .media-artist .text {
							width: 75px;
						}
					}
					@media only screen and (max-height: 896px) {
						.media-info .media-artist .text {
							width: 90px;
						}
					}
					`;
				}
			}
			return newState;
		});
		setmonochromeStartButtonStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.monochromeStartButton) {
					newState = `
						#taskbar .center-part .start-button span {
							background-color: #202020!important;
							background-image: unset!important;
						}

						#taskbar .center-part .start-button.active span {
							background-color: #101010!important;
							background-image: unset!important;
						}

						@media (prefers-color-scheme: dark) {
							#taskbar .center-part .start-button span {
								background-color: #f3f3f3!important;
								background-image: unset!important;
							}
							#taskbar .center-part .start-button.active span {
								background-color: #d0d0d0!important;
								background-image: unset!important;
							}
						}
					`;
				}
			}
			return newState;
		});
		setnoiseToTaskbarStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.noiseToTaskbar) {
					newState = `
						#taskbar:before {
							background-image: unset;
						}
					`;
				}
			}
			return newState;
		});
		setnoiseToStartmenuStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.noiseToStartmenu) {
					newState = `
						#startMenu:before {
							background-image: unset;
						}
					`;
				}
			}
			return newState;
		});
		setnoiseToActionCenterStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.noiseToStartmenu) {
					newState = `
						#controlCenter:before {
							background-image: unset;
						}
					`;
				}
			}
			return newState;
		});
		setnoiseToMenuStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.noiseToStartmenu) {
					newState = `
						.appMenu:before {
							background-image: unset;
						}
					`;
				}
			}
			return newState;
		});
		setnoiseToWidgetsStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.noiseToWidgets) {
					newState = `
						.widget:before {
							background-image: url('data:image/png;base64,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');
						}
					`;
				}
			}
			return newState;
		});
		setdisableTaskbarBorderStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableTaskbarBorder) {
					newState = `
						#taskbar, #taskbar:before {
							border-width: 0px!important;
						}

						#taskbar .bottom-part {
							border-top-width: 0px!important;
						}
					`;
				}
			}
			return newState;
		});
		setdisableStartmenuBorderStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableStartmenuBorder) {
					newState = `
						#startMenu, #startMenu:before, #startMenu .header button, #startMenu .searchbar {
							border-width: 0px!important;
						}

						#startMenu .startTabs {
							border-bottom-width: 0px!important;
						}

						#startMenu .searchbar {
							border-bottom-width: 3px!important;
						}
					`;
				}
			}
			return newState;
		});
		setdisableWidgetBorderStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableWidgetBorder) {
					newState = `
						.widget, .widget:before {
							border-width: 0px!important;
						}
					`;
				}
			}
			return newState;
		});
		setdisableActionCenterBorderStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableActionCenterBorder) {
					newState = `
						#controlCenter, #contolCenter:before, #controlCenter .header button {
							border-width: 0px!important;
						}
						#controlCenter .header {
							border-bottom-width: 0px!important;
						}
					`;
				}
			}
			return newState;
		});
		setdisableMenuBorderStyle((state) => {
			let newState = state;
			if (storage.extraValues) {
				if (storage.extraValues.disableMenuBorder) {
					newState = `
						.appMenu, .appMenu:before {
							border-width: 0px!important;
						}
						.appMenu .settings {
							border-bottom-width: 0px!important;
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
			{storage.extraValues && storage.extraValues.noiseToTaskbar ? (
				<style id='noiseToTaskbar'>{noiseToTaskbarStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.noiseToStartmenu ? (
				<style id='noiseToStartmenu'>{noiseToStartmenuStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.noiseToWidgets ? (
				<style id='noiseToWidgets'>{noiseToWidgetsStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableTaskbarBorder ? (
				<style id='disableTaskbarBorder'>{disableTaskbarBorderStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableStartmenuBorder ? (
				<style id='disableStartmenuBorder'>{disableStartmenuBorderStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableWidgetBorder ? (
				<style id='disableWidgetBorder'>{disableWidgetBorderStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.monochromeStartButton ? (
				<style id='monochromeStartButton'>{monochromeStartButtonStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.blurRadius ? (
				<style id='blurRadius'>{blurRadiusStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.borderRadius ? (
				<style id='borderRadius'>{borderRadiusStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.noiseToActionCenter ? (
				<style id='noiseToActionCenter'>{noiseToActionCenterStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableActionCenterBorder ? (
				<style id='disableActionCenterBorder'>
					{disableActionCenterBorderStyle}
				</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.noiseToMenu ? (
				<style id='noiseToMenu'>{noiseToMenuStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.disableMenuBorder ? (
				<style id='disableMenuBorder'>{disableMenuBorderStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.compactifyMedia ? (
				<style id='compactifyMedia'>{compactifyMediaStyle}</style>
			) : (
				''
			)}
			{storage.extraValues && storage.extraValues.hideIconLabels ? (
				<style id='hideIconLabels'>{hideIconLabelsStyle}</style>
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
