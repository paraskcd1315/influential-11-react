/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState } from 'react';
import { useLongPress } from 'use-long-press';
import { connect } from 'react-redux';

import { showMenu, openStartMenu } from '../../actions/components';
import { replaceApp } from '../../actions/storage';
import {
	showAddAppsMenu,
	showRemoveAppFromFolderMenu,
	showReplaceAppsMenu,
	showRemoveAppFromPageMenu
} from '../../actions/menu';
import { searchQuery } from '../../actions/components';
import { addAppToFolder, addAppToPage } from '../../actions/explorer';

const App = ({
	identifier,
	badge,
	icon,
	name,
	className,
	hideName,
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	buttonAnimate,
	menuReducer,
	replaceApp,
	searchQuery,
	hideBadge,
	componentsReducer: { startMenuOpen, addAppToFolderFlag, addAppFoPageFlag },
	explorerCustomFolderReducer: { page, pageID, folderID },
	storageReducer: { extraValues },
	openStartMenu,
	hideStartMenu,
	addAppToFolder,
	addAppToPage,
	showRemoveAppFromFolderMenu,
	showRemoveAppFromPageMenu
}) => {
	const [moved, setPointerMove] = useState(false);

	const longPress = useLongPress(
		() => {
			if (!menuReducer.replaceApp) {
				if (className === 'app' || className === 'explorerApp') {
					showAddAppsMenu({
						identifier: identifier,
						name: name,
						icon: icon,
						addApp: true
					});
					showMenu(true);
				} else if (className === 'folderApp') {
					showRemoveAppFromFolderMenu({
						identifier: identifier,
						name: name,
						icon: icon,
						removeApp: true
					});
					showMenu(true);
				} else if (className === 'pageApp') {
					showRemoveAppFromPageMenu({
						identifier: identifier,
						name: name,
						icon: icon,
						removeApp: true,
						fromPage: true
					});
					showMenu(true);
				} else {
					showReplaceAppsMenu({
						identifier: identifier,
						name: name,
						icon: icon,
						replaceApp: true,
						removeApp: true
					});
					showMenu(true);
				}
			}
		},
		{
			onCancel: (e) => {
				if (buttonAnimate) {
					buttonAnimate(e);
				}
				if (
					document.getElementsByClassName('searchInput')[0] &&
					document.getElementsByClassName('searchInput')[0].value.length > 0
				) {
					searchQuery('');
					document.getElementsByClassName('searchInput')[0].value = '';
				}
				if (!moved) {
					if (menuReducer.replaceApp) {
						replaceApp({
							older: menuReducer.identifier,
							newer: identifier
						});
						showReplaceAppsMenu({
							identifier: '',
							name: '',
							icon: '',
							replaceApp: false,
							removeApp: false
						});
					} else if (addAppToFolderFlag) {
						addAppToFolder({
							flag: false,
							page: page,
							pageID: pageID,
							folderID: folderID,
							app: identifier
						});
						if (startMenuOpen) {
							hideStartMenu();
							setTimeout(() => {
								openStartMenu(false);
							}, 250);
						}
					} else if (addAppFoPageFlag) {
						addAppToPage({
							flag: false,
							pageID: page,
							app: identifier
						});
						if (startMenuOpen) {
							hideStartMenu();
							setTimeout(() => {
								openStartMenu(false);
							}, 250);
						}
					} else {
						window.api.apps.launchApplication(identifier);
						if (startMenuOpen) {
							hideStartMenu();
							setTimeout(() => {
								openStartMenu(false);
							}, 250);
						}
					}
				}
				setPointerMove(false);
			},
			onMove: () => {
				setPointerMove(true);
			},
			threshold: 500,
			captureEvent: true,
			cancelOnMovement: true,
			detect: 'touch'
		}
	);

	return (
		<div id={identifier} className={className} {...longPress}>
			{hideBadge ? '' : badge !== '' ? <div className='badge'></div> : ''}
			<div className='icon'>
				<img src={icon} alt={name} />
			</div>
			{hideName ? (
				''
			) : extraValues &&
			  extraValues.hideIconLabels &&
			  className !== 'app allApps' ? (
				''
			) : (
				<div className='title'>{name}</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, {
	showMenu,
	showAddAppsMenu,
	showReplaceAppsMenu,
	searchQuery,
	replaceApp,
	openStartMenu,
	addAppToFolder,
	addAppToPage,
	showRemoveAppFromFolderMenu,
	showRemoveAppFromPageMenu
})(App);
