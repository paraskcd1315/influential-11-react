/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

import InputSwitch from '../InputSwitch';

const IndividualWidgetSettings = ({ style, options, handleSwitchChange }) => {
	const {
		hideExplorerBG,
		hideExplorerFolderTitle,
		useOwnAppsOnPages,
		hideAddApp,
		hideAddFolder,
		disableGradient,
		compactifyWeather,
		compactifyMedia
	} = options;
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
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='useOwnAppsOnPages'
				value={useOwnAppsOnPages ? 'on' : 'off'}
				label='Use own Apps on the Pages'
				description='This setting removes the automatic organisation of Apps to all the Explorer Pages, and gives you the freedom to add/remove your own. (Tip: If you see the page completely blank after disabling it, refresh the Widget.)'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideAddApp'
				value={hideAddApp ? 'on' : 'off'}
				label='Hide Add Apps button'
				description='This setting removes the button that allows adding more Apps in Folders/Pages. Useful for Setup/Screenshot purposes to hide that ugly + button in the Explorer. (Tip: Enable this option, only when you have completely pinned your desired Apps.)'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideAddFolder'
				value={hideAddFolder ? 'on' : 'off'}
				label='Hide Add Folder button'
				description='This setting removes the button that allows adding more Folders Pages. Useful for Setup/Screenshot purposes to hide that ugly Add Folder button in the Explorer Sidebar. (Tip: Enable this option, only when you have completely pinned your desired Folders.)'
			/>
			<br />
			<div className='settings-label'>Weather Widget Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableGradient'
				value={disableGradient ? 'on' : 'off'}
				label='Disable Gradient Color'
				description='This setting removes the Gradient Effect to the Widget, and makes it into the default Window Pane Color. (Like Explorer, Music, Settings etc.)'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='compactifyWeather'
				value={compactifyWeather ? 'on' : 'off'}
				label='Make it Compact'
				description='This setting minifies the padding between different elements inside the Widget, meaning it makes it smaller/compact if you will. (Tip: Refresh the widget for Better Results)'
			/>
			<div className='settings-label'>Music Widget Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='compactifyMedia'
				value={compactifyMedia ? 'on' : 'off'}
				label='Make it Compact'
				description='This setting minifies the padding between different elements inside the Widget, meaning it makes it smaller/compact if you will. (Tip: Refresh the widget for Better Results)'
			/>
		</div>
	);
};

export default IndividualWidgetSettings;
