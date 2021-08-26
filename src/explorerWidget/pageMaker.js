/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import App from '../components/individualComponents/App';

const PageMaker = ({
	id,
	headerTitle,
	headerIcon,
	style,
	apps,
	appReducer: { allApplications }
}) => {
	const renderApps = () => {
		const filteredApps = allApplications.filter((app) => {
			return apps.includes(app.identifier);
		});

		return filteredApps.map((app) => {
			return (
				<App
					key={app.identifier + 'explorerApp'}
					identifier={app.identifier}
					badge={app.badge}
					icon={app.icon}
					name={app.name}
					className={'explorerApp'}
					hideName={false}
				/>
			);
		});
	};

	return (
		<div id={id} className='explorer-page' style={style}>
			<div className='explorer-header'>
				<div className='header-icon'>{headerIcon()}</div>
				<div className='explorer-title'>{headerTitle}</div>
			</div>
			<div className='explorer-apps'>{renderApps()}</div>
		</div>
	);
};

export default PageMaker;
