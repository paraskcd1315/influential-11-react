/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import rgbHex from 'rgb-hex';

import WidgetMaker from '../individualComponents/WidgetMaker';
import { openSettings } from '../../actions/widget';
import Homepage from '../settingsWidget/pages/Homepage';
import MainSettings from '../settingsWidget/pages/MainSettings';
import IndividualWidgetSettings from '../settingsWidget/pages/IndividualWidgetSettings';
import LookNFeelSettings from '../settingsWidget/pages/LookNFeelSettings';
import ColorSettings from '../settingsWidget/pages/ColorSettings';
import { addValue } from '../../actions/storage';

const Settings = ({
	widgetReducer: { settingsOpen },
	openSettings,
	systemReducer: { deviceModel, deviceModelPromotional, deviceName },
	storageReducer,
	addValue
}) => {
	const [options, setOptions] = useState({
		username: '',
		hideIconLabels: false,
		twentyFourHourTime: false,
		hideExplorerBG: false,
		hideExplorerFolderTitle: false,
		useOwnAppsOnPages: false,
		hideAddApp: false,
		hideAddFolder: false,
		disableGradient: false,
		compactifyWeather: false,
		noiseToTaskbar: false,
		disableTaskbarBorder: false,
		monochromeStartButton: false,
		noiseToWidgets: false,
		disableWidgetBorder: false,
		noiseToStartmenu: false,
		disableStartmenuBorder: false,
		noiseToActionCenter: false,
		disableActionCenterBorder: false,
		noiseToMenu: false,
		disableMenuBorder: false,
		blurRadius: 20,
		borderRadius: 1.2,
		compactifyMedia: false,
		hideFadeEffect: false,
		removeBackButton: false,
		startButtonColor1: '#67cffd',
		startButtonColor2Dark: '#00abf9',
		startButtonColor2Light: '#2f93de',
		startButtonColor3Light: '#1e78bc',
		startButtonColor3Dark: '#2dbdff',
		backgroundColorLight: '#' + rgbHex(243, 243, 243, 0.4),
		backgroundButtonColorLight: '#' + rgbHex(253, 253, 253, 0.4),
		textColorLight: '#202020',
		borderColorLight: '#' + rgbHex(243, 243, 243, 0.2),
		backgroundColorDark: '#' + rgbHex(32, 32, 32, 0.4),
		backgroundButtonColorDark: '#' + rgbHex(83, 83, 83, 0.4),
		textColorDark: '#f3f3f3',
		borderColorDark: '#' + rgbHex(32, 32, 32, 0.2)
	});

	useEffect(() => {
		setOptions((state) => {
			return {
				...state,
				username: !storageReducer.extraValues
					? ''
					: !storageReducer.extraValues.username
					? ''
					: storageReducer.extraValues.username,
				hideIconLabels: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideIconLabels
					? false
					: true,
				twentyFourHourTime: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.twentyFourHourTime
					? false
					: true,
				hideExplorerBG: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideExplorerBG
					? false
					: true,
				hideExplorerFolderTitle: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideExplorerFolderTitle
					? false
					: true,
				useOwnAppsOnPages: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.useOwnAppsOnPages
					? false
					: true,
				hideAddApp: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideAddApp
					? false
					: true,
				hideAddFolder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideAddFolder
					? false
					: true,
				disableGradient: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableGradient
					? false
					: true,
				compactifyWeather: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.compactifyWeather
					? false
					: true,
				noiseToTaskbar: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.noiseToTaskbar
					? false
					: true,
				disableTaskbarBorder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableTaskbarBorder
					? false
					: true,
				monochromeStartButton: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.monochromeStartButton
					? false
					: true,
				noiseToWidgets: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.noiseToWidgets
					? false
					: true,
				disableWidgetBorder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableWidgetBorder
					? false
					: true,
				noiseToStartmenu: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.noiseToStartmenu
					? false
					: true,
				disableStartmenuBorder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableStartmenuBorder
					? false
					: true,
				noiseToActionCenter: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.noiseToActionCenter
					? false
					: true,
				disableActionCenterBorder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableActionCenterBorder
					? false
					: true,
				noiseToMenu: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.noiseToMenu
					? false
					: true,
				disableMenuBorder: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.disableMenuBorder
					? false
					: true,
				blurRadius: !storageReducer.extraValues
					? 20
					: !storageReducer.extraValues.blurRadius
					? 20
					: storageReducer.extraValues.blurRadius,
				borderRadius: !storageReducer.extraValues
					? 1.2
					: !storageReducer.extraValues.borderRadius
					? 1.2
					: storageReducer.extraValues.borderRadius,
				compactifyMedia: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.compactifyMedia
					? false
					: true,
				hideFadeEffect: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.hideFadeEffect
					? false
					: true,
				removeBackButton: !storageReducer.extraValues
					? false
					: !storageReducer.extraValues.removeBackButton
					? false
					: true,
				startButtonColor1: !storageReducer.extraValues
					? '#67cffd'
					: !storageReducer.extraValues.startButtonColor1
					? '#67cffd'
					: storageReducer.extraValues.startButtonColor1,
				startButtonColor2Dark: !storageReducer.extraValues
					? '#00abf9'
					: !storageReducer.extraValues.startButtonColor2Dark
					? '#00abf9'
					: storageReducer.extraValues.startButtonColor2Dark,
				startButtonColor2Light: !storageReducer.extraValues
					? '#2f93de'
					: !storageReducer.extraValues.startButtonColor2Light
					? '#2f93de'
					: storageReducer.extraValues.startButtonColor2Light,
				startButtonColor3Light: !storageReducer.extraValues
					? '#1e78bc'
					: !storageReducer.extraValues.startButtonColor3Light
					? '#1e78bc'
					: storageReducer.extraValues.startButtonColor3Light,
				startButtonColor3Dark: !storageReducer.extraValues
					? '#2dbdff'
					: !storageReducer.extraValues.startButtonColor3Dark
					? '#2dbdff'
					: storageReducer.extraValues.startButtonColor3Dark,
				backgroundColorLight: !storageReducer.extraValues
					? '#' + rgbHex(243, 243, 243, 0.4)
					: !storageReducer.extraValues.backgroundColorLight
					? '#' + rgbHex(243, 243, 243, 0.4)
					: storageReducer.extraValues.backgroundColorLight,
				backgroundButtonColorLight: !storageReducer.extraValues
					? '#' + rgbHex(253, 253, 253, 0.4)
					: !storageReducer.extraValues.backgroundButtonColorLight
					? '#' + rgbHex(253, 253, 253, 0.4)
					: storageReducer.extraValues.backgroundButtonColorLight,
				textColorLight: !storageReducer.extraValues
					? '#202020'
					: !storageReducer.extraValues.textColorLight
					? '#202020'
					: storageReducer.extraValues.textColorLight,
				borderColorLight: !storageReducer.extraValues
					? '#' + rgbHex(243, 243, 243, 0.2)
					: !storageReducer.extraValues.borderColorLight
					? '#' + rgbHex(243, 243, 243, 0.2)
					: storageReducer.extraValues.borderColorLight,
				backgroundColorDark: !storageReducer.extraValues
					? '#' + rgbHex(32, 32, 32, 0.4)
					: !storageReducer.extraValues.backgroundColorDark
					? '#' + rgbHex(32, 32, 32, 0.4)
					: storageReducer.extraValues.backgroundColorDark,
				backgroundButtonColorDark: !storageReducer.extraValues
					? '#' + rgbHex(83, 83, 83, 0.4)
					: !storageReducer.extraValues.backgroundButtonColorDark
					? '#' + rgbHex(83, 83, 83, 0.4)
					: storageReducer.extraValues.backgroundButtonColorDark,
				textColorDark: !storageReducer.extraValues
					? '#f3f3f3'
					: !storageReducer.extraValues.textColorDark
					? '#f3f3f3'
					: storageReducer.extraValues.textColorDark,
				borderColorDark: !storageReducer.extraValues
					? '#' + rgbHex(32, 32, 32, 0.2)
					: !storageReducer.extraValues.borderColorDark
					? '#' + rgbHex(32, 32, 32, 0.2)
					: storageReducer.extraValues.borderColorDark
			};
		});
	}, [storageReducer]);

	const handleTextChange = (e) => {
		setOptions((state) => {
			return {
				...state,
				[e.target.name]: e.target.value
			};
		});
		addValue({
			key: e.target.name,
			value: e.target.value
		});
	};

	const handleSwitchChange = (e) => {
		const { checked } = e.target;
		if (checked) {
			setOptions((state) => {
				return {
					...state,
					[e.target.name]: true
				};
			});
			addValue({
				key: e.target.name,
				value: true
			});
		} else {
			setOptions((state) => {
				return {
					...state,
					[e.target.name]: false
				};
			});
			addValue({
				key: e.target.name,
				value: false
			});
		}
	};

	const handleRangeChange = (e) => {
		setOptions((state) => {
			return {
				...state,
				[e.target.name]: e.target.value
			};
		});
		addValue({
			key: e.target.name,
			value: e.target.value
		});
	};

	const [style, setStyle] = useState({
		opacity: 0,
		transform: 'translate(-50%, -40%)'
	});

	const pageClosedStyle = {
		opacity: 0,
		transform: 'translateX(-20px)',
		pointerEvents: 'none'
	};

	const pageOpenedStyle = {
		opacity: 1,
		transform: 'translateX(0)',
		pointerEvents: null
	};

	const backCallback = () => {
		if (!homePageStyle.flag) {
			if (mainSettingsStyle.flag) {
				setMainSettingsStyle((state) => {
					return {
						...state,
						flag: false,
						style: pageClosedStyle
					};
				});
			}
			if (individualSettingsStyle.flag) {
				setIndividualSettingsStyle((state) => {
					return {
						...state,
						flag: false,
						style: pageClosedStyle
					};
				});
			}
			if (lookNFeelSettingsStyle.flag) {
				setLookNFeelSettingsStyle((state) => {
					return {
						...state,
						flag: false,
						style: pageClosedStyle
					};
				});
			}
			if (colorSettingsStyle.flag) {
				setColorSettingsStyle((state) => {
					return {
						...state,
						flag: false,
						style: pageClosedStyle
					};
				});
			}
			setHomePageStyle((state) => {
				return {
					...state,
					flag: true,
					style: pageOpenedStyle
				};
			});
		}
	};

	const [homePageStyle, setHomePageStyle] = useState({
		flag: true,
		style: pageOpenedStyle
	});

	const [mainSettingsStyle, setMainSettingsStyle] = useState({
		flag: false,
		style: pageClosedStyle
	});

	const [individualSettingsStyle, setIndividualSettingsStyle] = useState({
		flag: false,
		style: pageClosedStyle
	});

	const [lookNFeelSettingsStyle, setLookNFeelSettingsStyle] = useState({
		flag: false,
		style: pageClosedStyle
	});

	const [colorSettingsStyle, setColorSettingsStyle] = useState({
		flag: false,
		style: pageClosedStyle
	});

	useEffect(() => {
		if (settingsOpen) {
			setTimeout(() => {
				setStyle((state) => {
					return { ...state, opacity: 1, transform: 'translate(-50%, -50%)' };
				});
			}, 250);
		}
	}, [settingsOpen]);

	const settingsContent = () => {
		return (
			<>
				<div className='settings-header'>
					<div className='deviceStuff'>
						<div className='devicePic'>
							<img
								src={'assets/iPhoneModels/' + deviceModel + '.png'}
								alt={deviceModel}
							/>
						</div>
						<div className='deviceInfo'>
							<div className='deviceModelPromotional'>
								{deviceModelPromotional}
							</div>
							<div className='deviceName'>{deviceName}</div>
						</div>
					</div>
					<div className='userStuff'>
						<div className='userPic'>
							<img src='images/account.jpg' alt='userPic' />
						</div>
						<div className='userName'>
							{!storageReducer.extraValues
								? 'Username'
								: !storageReducer.extraValues.username
								? 'Username'
								: storageReducer.extraValues.username}
						</div>
					</div>
				</div>
				<div className='settings-content'>
					<div className='settings-pages'>
						<Homepage
							style={homePageStyle.style}
							openMainSettings={() => {
								if (homePageStyle.flag) {
									setHomePageStyle((state) => {
										return { ...state, flag: false, style: pageClosedStyle };
									});
									setMainSettingsStyle((state) => {
										return {
											...state,
											flag: true,
											style: pageOpenedStyle
										};
									});
								}
							}}
							openIndividualWidgetSettings={() => {
								setHomePageStyle((state) => {
									return { ...state, flag: false, style: pageClosedStyle };
								});
								setIndividualSettingsStyle((state) => {
									return {
										...state,
										flag: true,
										style: pageOpenedStyle
									};
								});
							}}
							openLookNFeelSettings={() => {
								setHomePageStyle((state) => {
									return { ...state, flag: false, style: pageClosedStyle };
								});
								setLookNFeelSettingsStyle((state) => {
									return {
										...state,
										flag: true,
										style: pageOpenedStyle
									};
								});
							}}
							openColorSettings={() => {
								setHomePageStyle((state) => {
									return { ...state, flag: false, style: pageClosedStyle };
								});
								setColorSettingsStyle((state) => {
									return {
										...state,
										flag: true,
										style: pageOpenedStyle
									};
								});
							}}
						/>
						<MainSettings
							style={mainSettingsStyle.style}
							options={options}
							handleTextChange={handleTextChange}
							handleSwitchChange={handleSwitchChange}
							handleRangeChange={handleRangeChange}
						/>
						<IndividualWidgetSettings
							style={individualSettingsStyle.style}
							options={options}
							handleTextChange={handleTextChange}
							handleSwitchChange={handleSwitchChange}
						/>
						<LookNFeelSettings
							style={lookNFeelSettingsStyle.style}
							options={options}
							handleTextChange={handleTextChange}
							handleSwitchChange={handleSwitchChange}
						/>
						<ColorSettings style={colorSettingsStyle.style} options={options} />
					</div>
				</div>
			</>
		);
	};

	return (
		<WidgetMaker
			id={'settingsWidget'}
			className={'desktopWidget x-large'}
			title={'Settings'}
			style={style}
			content={settingsContent()}
			closeCallback={() => {
				setStyle((state) => {
					return { ...state, opacity: 0, transform: 'translate(-50%, -40%)' };
				});
				setTimeout(() => openSettings(false), 250);
			}}
			showBackButton={
				storageReducer.extraValues &&
				storageReducer.extraValues.removeBackButton
					? homePageStyle.flag
						? false
						: true
					: true
			}
			activeBackButton={homePageStyle.flag}
			backButtonCallback={backCallback}
		/>
	);
};

const mapStateToProps = (state) => ({
	widgetReducer: state.widgetReducer,
	systemReducer: state.systemReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, { openSettings, addValue })(Settings);
