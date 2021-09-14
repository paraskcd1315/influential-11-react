/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import App from '../individualComponents/App';
import Folder from './folder';
import { openStartMenu } from '../../actions/components';
import { ADD_APP_TO_FOLDER, ADD_APP_TO_PAGE } from '../../actions/types';
import currentTranslate from '../../localizations';

const PageMaker = ({
	id,
	headerTitle,
	headerIcon,
	style,
	apps,
	folders,
	maximize,
	appReducer: { allApplications },
	dockIcons,
	folderClick,
	customFolder,
	componentsReducer: { startMenuOpen },
	storageReducer: { extraValues },
	openStartMenu,
	activateAddAppToFolder,
	activateAddAppToPage
}) => {
	const [pointerEventss, setPointerEvents] = useState({
		pointerEvents: 'none'
	});

	useEffect(() => {
		setTimeout(() => {
			setPointerEvents({ pointerEvents: null });
		}, 250);
	}, []);

	const renderFolders = () => {
		if (folders && Object.keys(folders).length !== 0) {
			return Object.keys(folders).map((folder) => {
				return (
					<Folder
						key={folder}
						identifier={folder}
						icon={() => {
							return <img src='assets/explorerIcons/Folder.png' alt='Folder' />;
						}}
						name={folders[folder].folderName}
						callback={folderClick}
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
				<div className='noApps'>{currentTranslate.randomWords[8]}</div>
			);
		} else {
			const filteredApps = allApplications.filter((app) => {
				return apps.includes(app.identifier);
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

			return customFolder ? (
				apps.length < 1 ? (
					extraValues && extraValues.hideAddApp ? (
						''
					) : (
						<div
							style={pointerEventss}
							className='folderNoApps'
							onClick={() => {
								if (!startMenuOpen) {
									openStartMenu(true);
								}
								activateAddAppToFolder({
									flag: true
								});
							}}>
							{currentTranslate.randomWords[9]} - {headerTitle}.
							<i className='icon-ic_fluent_add_circle_24_regular'></i>
						</div>
					)
				) : (
					<>
						{result.map((app) => {
							return (
								<App
									key={app.identifier + 'folderApp'}
									identifier={app.identifier}
									badge={app.badge}
									icon={app.icon}
									name={app.name}
									className={'folderApp'}
									hideName={false}
								/>
							);
						})}
						{extraValues && extraValues.hideAddApp ? (
							''
						) : (
							<i
								className='icon-ic_fluent_add_circle_24_regular addApp'
								onClick={() => {
									if (!startMenuOpen) {
										openStartMenu(true);
									}
									activateAddAppToFolder({
										flag: true
									});
								}}></i>
						)}
					</>
				)
			) : extraValues && extraValues.useOwnAppsOnPages ? (
				apps.length < 1 ? (
					extraValues && extraValues.hideAddApp ? (
						''
					) : (
						<div className='addApp'>
							{currentTranslate.randomWords[10]}
							<i
								className='icon-ic_fluent_add_circle_24_regular'
								onClick={() => {
									if (!startMenuOpen) {
										openStartMenu(true);
									}
									activateAddAppToPage({
										flag: true
									});
								}}></i>
						</div>
					)
				) : (
					<>
						{result.map((app) => {
							return (
								<App
									key={app.identifier + 'pageApp'}
									identifier={app.identifier}
									badge={app.badge}
									icon={app.icon}
									name={app.name}
									className={'pageApp'}
									hideName={false}
								/>
							);
						})}{' '}
						{extraValues && extraValues.hideAddApp ? (
							''
						) : (
							<i
								className='icon-ic_fluent_add_circle_24_regular addApp'
								onClick={() => {
									if (!startMenuOpen) {
										openStartMenu(true);
									}
									activateAddAppToPage({
										flag: true
									});
								}}></i>
						)}
					</>
				)
			) : (
				filteredApps.map((app) => {
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
				})
			);
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

const mapStateToProps = (state) => ({
	componentsReducer: state.componentsReducer,
	storageReducer: state.storageReducer
});

const activateAddAppToFolder = () => (dispatch) => {
	dispatch({
		type: ADD_APP_TO_FOLDER,
		payload: {
			flag: true
		}
	});
};

const activateAddAppToPage = () => (dispatch) => {
	dispatch({
		type: ADD_APP_TO_PAGE,
		payload: {
			flag: true
		}
	});
};

export default connect(mapStateToProps, {
	openStartMenu,
	activateAddAppToFolder,
	activateAddAppToPage
})(PageMaker);
