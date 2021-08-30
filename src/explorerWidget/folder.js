/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLongPress } from 'use-long-press';
import { showMenu } from '../actions/components';

import { showRemoveFolderMenu } from '../actions/menu';

const Folder = ({
	identifier,
	icon,
	name,
	callback,
	showRemoveFolderMenu,
	showMenu,
	fromPage
}) => {
	const [moved, setPointerMoved] = useState(false);

	const longPress = useLongPress(
		() => {
			showRemoveFolderMenu({
				folderID: identifier,
				folderName: name,
				icon: true,
				removeFolder: true,
				fromPage: fromPage
			});
			showMenu(true);
		},
		{
			onCancel: (e) => {
				if (!moved) {
					callback(e);
				}
				setPointerMoved(false);
			},
			onMove: () => {
				setPointerMoved(true);
			},
			threshold: 500,
			captureEvent: true,
			cancelOnMovement: true,
			detect: 'touch'
		}
	);

	return (
		<div id={identifier} className='explorerFolder' {...longPress}>
			<div className='icon'>{icon()}</div>
			<div className='title'>{name}</div>
		</div>
	);
};

export default connect(null, { showRemoveFolderMenu, showMenu })(Folder);
