import React, { useState } from 'react';
import { connect } from 'react-redux';

import Searchbar from './pageComponents/Searchbar';
import MainScreen from './pageComponents/MainScreen';
import AllApps from './pageComponents/AllApps';
import MoreWidgets from './pageComponents/MoreWidgets';

const StartMenu = ({ componentsReducer, timeReducer }) => {
	const { startMenuOpen } = componentsReducer;
	const [allAppsOpen, openAllApps] = useState(false);
	const [moreWidgetsOpen, openMoreWidgets] = useState(false);

	const showStartMenu = () => {
		return startMenuOpen
			? {
					opacity: 1,
					transform: 'translate(-50%, 0)'
			  }
			: {
					opacity: 0,
					transform: 'translate(-50%, 50px)',
					transition: '150ms ease-out'
			  };
	};

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
		<div id='startMenu' style={showStartMenu()}>
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
					<i className='apps icon-ic_fluent_launcher_settings_24_regular'></i>
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

export default connect(mapStateToProps, null)(StartMenu);
