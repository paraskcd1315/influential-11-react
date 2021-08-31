/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const PinnedApps = ({
	appsReducer: { allApplications },
	storageReducer: { dockIcons },
	hideStartMenu
}) => {
	const renderApps = () => {
		if (dockIcons.length > 5) {
			const filteredApps = allApplications.filter((app) => {
				return dockIcons.slice(5, dockIcons.length).includes(app.identifier);
			});

			let result = [];

			dockIcons.forEach((key) => {
				let found = false;
				filteredApps.filter((item) => {
					if (!found && item.identifier === key) {
						result.push(item);
						found = true;
						return false;
					} else {
						return true;
					}
				});
			});

			return result.map((app) => {
				return (
					<App
						key={app.identifier + 'favApp'}
						identifier={app.identifier}
						badge={app.badge}
						icon={app.icon}
						name={app.name}
						className={'favApp'}
						hideStartMenu={hideStartMenu}
					/>
				);
			});
		} else {
			return (
				<div className='noApps'>
					More Pinned Apps will show up here. Go to All Apps to pin your
					Favourite Apps here.
				</div>
			);
		}
	};

	return <>{renderApps()}</>;
};

const mapStateToProps = (state) => ({
	appsReducer: state.appsReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, null)(PinnedApps);
