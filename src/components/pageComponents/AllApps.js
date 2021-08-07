import React from 'react';
import { connect } from 'react-redux';

import App from '../individualComponents/App';

const AllApps = ({
	appsReducer,
	allAppsOpen,
	showAllApps,
	openAllApps,
	hideMainScreen
}) => {
	const allApps = appsReducer.allApplications;

	const renderAllApps = () => {
		return allApps.map((app) => {
			return (
				<App
					key={app.identifier + 'app'}
					identifier={app.identifier}
					badge={app.badge}
					icon={app.icon}
					name={app.name}
					className={'app'}
				/>
			);
		});
	};

	return (
		<div
			className={
				allAppsOpen ? 'allApps pages-page' : 'allApps pages-page disabled'
			}
			style={showAllApps()}>
			<div className='header'>
				<div className='title'>All Apps</div>
				<button
					onClick={() => {
						openAllApps(!allAppsOpen);
						hideMainScreen();
					}}
					className='btn'>
					<i className='btn-chevron-back icon-ic_fluent_chevron_left_48_regular'></i>
					<div className='btn-title-back'>Back</div>
				</button>
			</div>
			<div className='content'>{renderAllApps()}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(AllApps);
