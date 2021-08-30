/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

import InputSwitch from '../InputSwitch';

const IndividualWidgetSettings = ({ style, options, handleSwitchChange }) => {
	const { hideExplorerBG, hideExplorerFolderTitle } = options;
	return (
		<div className={'settings-individual-widgets page'} style={style}>
			<div className='settings-label'>Explorer Widget Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideExplorerBG'
				value={hideExplorerBG ? 'on' : 'off'}
				label='Hide Background'
				description='This setting hides the Background of the Explorer Widget.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideExplorerFolderTitle'
				value={hideExplorerFolderTitle ? 'on' : 'off'}
				label='Hide Folder Titles'
				description='This setting hides the Titles of the folders of the Explorer Widget.'
			/>
		</div>
	);
};

export default IndividualWidgetSettings;
