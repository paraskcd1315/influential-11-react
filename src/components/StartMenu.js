/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Searchbar from './pageComponents/Searchbar';
import MainScreen from './pageComponents/MainScreen';
import AllApps from './pageComponents/AllApps';
import MoreWidgets from './pageComponents/MoreWidgets';
import { openSettings } from '../actions/widget';
import { openStartMenu } from '../actions/components';

const StartMenu = ({
	timeReducer,
	openSettings,
	openStartMenu,
	startMenuStyle,
	hideStartMenu
}) => {
	const [allAppsOpen, openAllApps] = useState(false);
	const [moreWidgetsOpen, openMoreWidgets] = useState(false);

	const hideMainScreen = () => {
		return allAppsOpen || moreWidgetsOpen
			? {
					opacity: 0
			  }
			: {
					opacity: 1
			  };
	};

	const showAllApps = () => {
		return allAppsOpen
			? {
					opacity: 1,
					transform: 'translateX(0)'
			  }
			: {
					opacity: 0,
					transform: 'translateX(5%)'
			  };
	};

	const showMoreWidgets = () => {
		return moreWidgetsOpen
			? {
					opacity: 1,
					transform: 'translateX(0)'
			  }
			: {
					opacity: 0,
					transform: 'translateX(5%)'
			  };
	};

	return (
		<div id='startMenu' style={startMenuStyle}>
			<div id='home' className='startTabs'>
				<Searchbar
					allAppsOpen={allAppsOpen}
					openAllApps={openAllApps}
					moreWidgetsOpen={moreWidgetsOpen}
					openMoreWidgets={openMoreWidgets}
					hideMainScreen={hideMainScreen}
				/>
				<div className='pages'>
					<MainScreen
						allAppsOpen={allAppsOpen}
						moreWidgetsOpen={moreWidgetsOpen}
						hideMainScreen={hideMainScreen}
						openAllApps={openAllApps}
						openMoreWidgets={openMoreWidgets}
					/>
					<AllApps
						allAppsOpen={allAppsOpen}
						showAllApps={showAllApps}
						openAllApps={openAllApps}
						hideMainScreen={hideMainScreen}
					/>
					<MoreWidgets
						moreWidgetsOpen={moreWidgetsOpen}
						showMoreWidgets={showMoreWidgets}
						openMoreWidgets={openMoreWidgets}
						hideMainScreen={hideMainScreen}
					/>
				</div>
			</div>
			<div className='footer'>
				<div className='user'>
					<div className='user-profile'>
						<img src='images/account.png' alt='userAccount' />
					</div>
					<div className='user-name'>Paras KCD</div>
				</div>
				<div className='start-tabs'>
					<i
						className='apps icon-ic_fluent_settings_24_regular'
						onClick={() => {
							openSettings(true);
							hideStartMenu();
							setTimeout(() => {
								openStartMenu(false);
							}, 250);
						}}></i>
					<i className='explorer icon-ic_fluent_apps_list_24_regular'></i>
					<div className='date'>
						{timeReducer.month + ' ' + timeReducer.date}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { openSettings, openStartMenu })(
	StartMenu
);
