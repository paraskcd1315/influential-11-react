/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../../localizations';

import InputSwitch from '../InputSwitch';
import ResetButton from '../ResetButton';

const IndividualWidgetSettings = ({
	style,
	options,
	handleSwitchChange,
	handleIndividualWidgetReset
}) => {
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
			<ResetButton
				callback={handleIndividualWidgetReset}
				title={currentTranslate.settings[39]}
			/>
			<div className='settings-label'>{currentTranslate.settings[44]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideExplorerBG'
				value={hideExplorerBG ? 'on' : 'off'}
				label={currentTranslate.settings[42]}
				description={currentTranslate.settings[43]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideExplorerFolderTitle'
				value={hideExplorerFolderTitle ? 'on' : 'off'}
				label={currentTranslate.settings[45]}
				description={currentTranslate.settings[46]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='useOwnAppsOnPages'
				value={useOwnAppsOnPages ? 'on' : 'off'}
				label={currentTranslate.settings[47]}
				description={currentTranslate.settings[48]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideAddApp'
				value={hideAddApp ? 'on' : 'off'}
				label={currentTranslate.settings[49]}
				description={currentTranslate.settings[50]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideAddFolder'
				value={hideAddFolder ? 'on' : 'off'}
				label={currentTranslate.settings[51]}
				description={currentTranslate.settings[52]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[53]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableGradient'
				value={disableGradient ? 'on' : 'off'}
				label={currentTranslate.settings[54]}
				description={currentTranslate.settings[55]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='compactifyWeather'
				value={compactifyWeather ? 'on' : 'off'}
				label={currentTranslate.settings[56]}
				description={currentTranslate.settings[57]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[58]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='compactifyMedia'
				value={compactifyMedia ? 'on' : 'off'}
				label={currentTranslate.settings[59]}
				description={currentTranslate.settings[60]}
			/>
		</div>
	);
};

export default IndividualWidgetSettings;
