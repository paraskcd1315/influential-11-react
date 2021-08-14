/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { useLongPress } from 'use-long-press';
import { connect } from 'react-redux';

import { showMenu } from '../../actions/components';
import { replaceApp } from '../../actions/storage';
import { showAddAppsMenu, showReplaceAppsMenu } from '../../actions/menu';
import { searchQuery } from '../../actions/components';
import { useState } from 'react';

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
	hideBadge
}) => {
	const [moved, setPointerMove] = useState(false);

	const longPress = useLongPress(
		() => {
			if (!menuReducer.replaceApp) {
				if (className === 'app') {
					showAddAppsMenu({
						identifier: identifier,
						name: name,
						icon: icon,
						addApp: true
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
					} else {
						window.api.apps.launchApplication(identifier);
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
			{hideName ? '' : <div className='title'>{name}</div>}
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
	replaceApp
})(App);
