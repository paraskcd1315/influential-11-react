/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import App from '../components/individualComponents/App';
import Folder from './folder';

const PageMaker = ({
	id,
	headerTitle,
	headerIcon,
	style,
	apps,
	folders,
	maximize,
	appReducer: { allApplications },
	dockIcons
}) => {
	const renderFolders = () => {
		if (folders && Object.keys(folders).length !== 0) {
			return Object.keys(folders).map((folder, index) => {
				return (
					<Folder
						key={folder}
						identifier={folder}
						icon={() => {
							return <img src='assets/explorerIcons/Folder.png' alt='Folder' />;
						}}
						name={folders[folder].folderName}
						callback={(e) => {
							return;
						}}
						fromPage={id}
					/>
				);
			});
		} else {
			return '';
		}
	};

	const renderApps = () => {
		if (dockIcons) {
			const filteredApps = allApplications.filter((app) => {
				return apps.slice(5, apps.length).includes(app.identifier);
			});

			let result = [];

			apps.forEach((key) => {
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

			return dockIcons.length > 5 ? (
				result.map((app) => {
					return (
						<App
							key={app.identifier + 'explorerFavApp'}
							identifier={app.identifier}
							badge={app.badge}
							icon={app.icon}
							name={app.name}
							className={'explorerFavApp'}
							hideName={false}
						/>
					);
				})
			) : (
				<div className='noApps'>
					More Favourite Apps will show up here. Go to the Start Menu to pin
					your Favourite Apps here.
				</div>
			);
		} else {
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
		}
	};

	return (
		<div id={id} className='explorer-page' style={style}>
			<div className='explorer-header'>
				<div className='header-icon'>{headerIcon()}</div>
				<div className='explorer-title'>{headerTitle}</div>
			</div>
			<div className={!maximize ? 'explorer-apps' : 'explorer-apps maximized'}>
				{renderFolders()}
				{renderApps()}
			</div>
		</div>
	);
};

export default PageMaker;
