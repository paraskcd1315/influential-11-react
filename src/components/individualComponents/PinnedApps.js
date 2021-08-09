import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const PinnedApps = ({ appsReducer, storageReducer }) => {
	const renderApps = () => {
		if (storageReducer['dockIcons'].length > 5) {
			let apps = [];

			for (let i = 5; i < storageReducer['dockIcons'].length; i++) {
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
					<App
						key={app.identifier + 'favApp'}
						identifier={app.identifier}
						badge={app.badge}
						icon={app.icon}
						name={app.name}
						className={'favApp'}
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

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(PinnedApps);
