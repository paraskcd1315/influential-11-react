/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../localizations';
import { connect } from 'react-redux';

import MenuButton from './individualComponents/MenuButton';
import { addApp, removeApp } from '../actions/storage';
import { showMenu, openStartMenu } from '../actions/components';
import {
	removeAppFromFolder,
	removeAppFromPage,
	removeFolderFromDocuments,
	removeFolderFromMusic,
	removeFolderFromPhotos,
	removeFolderFromVideo
} from '../actions/explorer';
import {
	showAddAppsMenu,
	showReplaceAppsMenu,
	showRemoveFolderMenu,
	showRemoveAppFromFolderMenu,
	showRemoveAppFromPageMenu
} from '../actions/menu';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = ({
	componentsReducer,
	menuReducer,
	addApp,
	removeApp,
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	showRemoveFolderMenu,
	openStartMenu,
	menuStyle,
	hideMenu,
	removeFolderFromDocuments,
	removeFolderFromMusic,
	removeFolderFromPhotos,
	removeFolderFromVideo,
	removeAppFromFolder,
	removeAppFromPage,
	showRemoveAppFromPageMenu,
	explorerAppsReducer: { documentApps, musicApps, photoApps, videoApps },
	explorerCustomFolderReducer: { page, pageID, folderID }
}) => {
	const { identifier, icon, name } = menuReducer;
	const [style, setStyle] = useState({ pointerEvents: 'none' });

	useEffect(() => {
		if (componentsReducer.showMenu) {
			setTimeout(() => {
				setStyle({ pointerEvents: 'unset' });
			}, 250);
		}
	}, [componentsReducer]);

	const showFooter = () => {
		if (identifier) {
			return (
				<>
					<div className='icon'>
						<img src={icon} alt={name} />
					</div>
					<div className='name'>{name}</div>
				</>
			);
		}
		return '';
	};

	const showMenuButtons = () => {
		if (menuReducer.addApp) {
			return (
				<MenuButton
					icon={'icon-ic_fluent_pin_24_regular'}
					title={currentTranslate.menuItems[0]}
					callback={() => {
						addApp(identifier);
						showAddAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							addApp: false
						});
						hideMenu();
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							showMenu(false);
						}, 250);
					}}
				/>
			);
		}
		if (menuReducer.removeFolder) {
			return (
				<MenuButton
					icon={'icon-ic_fluent_folder_prohibited_24_regular'}
					title={currentTranslate.menuItems[1]}
					callback={() => {
						if (documentApps.documentFolders[identifier]) {
							removeFolderFromDocuments(identifier);
						}
						if (musicApps.musicFolders[identifier]) {
							removeFolderFromMusic(identifier);
						}
						if (photoApps.photoFolders[identifier]) {
							removeFolderFromPhotos(identifier);
						}
						if (videoApps.videoFolders[identifier]) {
							removeFolderFromVideo(identifier);
						}
						showRemoveFolderMenu({
							identifier: '',
							name: '',
							icon: '',
							removeFolder: false
						});
						hideMenu();
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							showMenu(false);
						}, 250);
					}}
				/>
			);
		}
		if (
			menuReducer.removeApp &&
			!menuReducer.replaceApp &&
			!menuReducer.fromPage
		) {
			return (
				<MenuButton
					icon={'icon-ic_fluent_pin_off_24_regular'}
					title={currentTranslate.menuItems[2]}
					callback={() => {
						removeAppFromFolder({
							folderID: folderID,
							page: page,
							pageID: pageID,
							app: identifier
						});
						showRemoveAppFromFolderMenu({
							identifier: '',
							name: '',
							icon: '',
							removeApp: false
						});
						hideMenu();
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							showMenu(false);
						}, 250);
					}}
				/>
			);
		}
		if (
			menuReducer.removeApp &&
			!menuReducer.replaceApp &&
			menuReducer.fromPage
		) {
			return (
				<MenuButton
					icon={'icon-ic_fluent_pin_off_24_regular'}
					title={currentTranslate.menuItems[2]}
					callback={() => {
						removeAppFromPage({
							pageID: page,
							app: identifier
						});
						showRemoveAppFromPageMenu({
							identifier: '',
							name: '',
							icon: '',
							removeApp: false,
							fromPage: false
						});
						hideMenu();
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							showMenu(false);
						}, 250);
					}}
				/>
			);
		}
		if (menuReducer.replaceApp) {
			return (
				<>
					<MenuButton
						icon={'icon-ic_fluent_apps_24_regular'}
						title={currentTranslate.menuItems[3]}
						callback={() => {
							if (!componentsReducer.startMenuOpen) {
								openStartMenu(true);
							}
							showReplaceAppsMenu({
								identifier: identifier,
								icon: '',
								name: '',
								replaceApp: true,
								removeApp: false
							});
							hideMenu();
							setStyle({ pointerEvents: 'none' });
							setTimeout(() => {
								showMenu(false);
							}, 250);
						}}
					/>
					<MenuButton
						icon={'icon-ic_fluent_pin_off_24_regular'}
						title={currentTranslate.menuItems[4]}
						callback={() => {
							removeApp(identifier);
							showReplaceAppsMenu({
								identifier: '',
								icon: '',
								name: '',
								replaceApp: false,
								removeApp: false
							});
							hideMenu();
							setStyle({ pointerEvents: 'none' });
							setTimeout(() => {
								showMenu(false);
							}, 250);
						}}
					/>
				</>
			);
		}
	};

	return (
		<div className={'appMenu'} style={menuStyle}>
			<div className='settings' style={style}>
				{showMenuButtons()}
				<MenuButton
					icon={'icon-ic_fluent_prohibited_24_regular'}
					title={currentTranslate.menuItems[5]}
					callback={() => {
						hideMenu();
						setStyle({ pointerEvents: 'none' });
						setTimeout(() => {
							showMenu(false);
						}, 250);
						setTimeout(() => {
							if (menuReducer.addApp) {
								showAddAppsMenu({
									identifier: '',
									icon: '',
									name: '',
									addApp: false
								});
							} else if (menuReducer.removeFolder) {
								showRemoveFolderMenu({
									folderID: '',
									folderName: '',
									icon: false,
									removeFolder: false
								});
							} else {
								showReplaceAppsMenu({
									identifier: '',
									icon: '',
									name: '',
									replaceApp: false,
									removeApp: false
								});
							}
						}, 200);
					}}
				/>
			</div>
			<div
				style={style}
				className='footer'
				onClick={() => {
					window.api.apps.launchApplication(identifier);
					if (menuReducer.addApp) {
						showAddAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							addApp: false
						});
					} else {
						showReplaceAppsMenu({
							identifier: '',
							icon: '',
							name: '',
							replaceApp: false,
							removeApp: false
						});
					}
					hideMenu();
					setStyle({ pointerEvents: 'none' });
					setTimeout(() => {
						showMenu(false);
					}, 250);
				}}>
				{identifier ? showFooter() : ''}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	componentsReducer: state.componentsReducer,
	menuReducer: state.menuReducer,
	explorerAppsReducer: state.explorerAppsReducer,
	explorerCustomFolderReducer: state.explorerCustomFolderReducer
});

export default connect(mapStateToProps, {
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	showRemoveFolderMenu,
	addApp,
	removeApp,
	openStartMenu,
	removeFolderFromDocuments,
	removeFolderFromMusic,
	removeFolderFromPhotos,
	removeFolderFromVideo,
	removeAppFromFolder,
	removeAppFromPage,
	showRemoveAppFromPageMenu
})(Menu);
