/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import WidgetMaker from '../individualComponents/WidgetMaker';
import { openSettings } from '../../actions/widget';
import Homepage from '../settingsWidget/pages/Homepage';
import MainSettings from '../settingsWidget/pages/MainSettings';
import IndividualWidgetSettings from '../settingsWidget/pages/IndividualWidgetSettings';
import LookNFeelSettings from '../settingsWidget/pages/LookNFeelSettings';
import ColorSettings from '../settingsWidget/pages/ColorSettings';

const Settings = ({
	widgetReducer: { settingsOpen },
	openSettings,
	systemReducer: { deviceModel, deviceModelPromotional, deviceName },
	storageReducer
}) => {
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
							<img src='images/account.png' alt='userPic' />
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
						<MainSettings style={mainSettingsStyle.style} />
						<IndividualWidgetSettings style={individualSettingsStyle.style} />
						<LookNFeelSettings style={lookNFeelSettingsStyle.style} />
						<ColorSettings style={colorSettingsStyle.style} />
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
			showBackButton={true}
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

export default connect(mapStateToProps, { openSettings })(Settings);
