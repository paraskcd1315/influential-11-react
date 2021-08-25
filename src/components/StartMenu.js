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
import { openExplorer } from '../actions/widget';
import { addValue } from '../actions/storage';

const StartMenu = ({
	timeReducer: { month, date },
	openSettings,
	openStartMenu,
	startMenuStyle,
	hideStartMenu,
	storageReducer,
	openExplorer,
	addValue
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
						hideStartMenu={hideStartMenu}
					/>
					<AllApps
						allAppsOpen={allAppsOpen}
						showAllApps={showAllApps}
						openAllApps={openAllApps}
						hideMainScreen={hideMainScreen}
						hideStartMenu={hideStartMenu}
					/>
					<MoreWidgets
						moreWidgetsOpen={moreWidgetsOpen}
						showMoreWidgets={showMoreWidgets}
						openMoreWidgets={openMoreWidgets}
						hideMainScreen={hideMainScreen}
						hideStartMenu={hideStartMenu}
					/>
				</div>
			</div>
			<div className='footer'>
				<div className='user'>
					<div className='user-profile'>
						<img src='images/account.jpg' alt='userAccount' />
					</div>
					<div className='user-name'>
						{!storageReducer.extraValues
							? 'Username'
							: !storageReducer.extraValues.username
							? 'Username'
							: storageReducer.extraValues.username}
					</div>
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
					<i
						className='explorer icon-ic_fluent_apps_list_24_regular'
						onClick={() => {
							if (
								!storageReducer.extraValues ||
								!storageReducer.extraValues.Explorer
							) {
								openExplorer(true);
								addValue({
									key: 'Explorer',
									value: 0
								});
								hideStartMenu();
								setTimeout(() => {
									openStartMenu(false);
								}, 250);
							}
						}}></i>
					<div className='date'>{month + ' ' + date}</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	timeReducer: state.timeReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, {
	openSettings,
	openStartMenu,
	openExplorer,
	addValue
})(StartMenu);
