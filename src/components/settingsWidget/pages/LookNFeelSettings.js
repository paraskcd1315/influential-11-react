/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../../localizations';

import InputSwitch from '../InputSwitch';
import ResetButton from '../ResetButton';

const LookNFeelSettings = ({
	style,
	options,
	handleSwitchChange,
	handleLookNFeelReset
}) => {
	const {
		noiseToTaskbar,
		disableTaskbarBorder,
		monochromeStartButton,
		noiseToWidgets,
		disableWidgetBorder,
		noiseToStartmenu,
		disableStartmenuBorder,
		noiseToActionCenter,
		disableActionCenterBorder,
		noiseToMenu,
		disableMenuBorder
	} = options;
	return (
		<div className={'settings-looknfeel page'} style={style}>
			<ResetButton
				callback={handleLookNFeelReset}
				title={currentTranslate.settings[40]}
			/>
			<div className='settings-label'>{currentTranslate.settings[12]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToTaskbar'
				value={noiseToTaskbar ? 'on' : 'off'}
				label={currentTranslate.settings[13]}
				description={currentTranslate.settings[14]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableTaskbarBorder'
				value={disableTaskbarBorder ? 'on' : 'off'}
				label={currentTranslate.settings[15]}
				description={currentTranslate.settings[16]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='monochromeStartButton'
				value={monochromeStartButton ? 'on' : 'off'}
				label={currentTranslate.settings[17]}
				description={currentTranslate.settings[18]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[19]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToStartmenu'
				value={noiseToStartmenu ? 'on' : 'off'}
				label={currentTranslate.settings[20]}
				description={currentTranslate.settings[21]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableStartmenuBorder'
				value={disableStartmenuBorder ? 'on' : 'off'}
				label={currentTranslate.settings[22]}
				description={currentTranslate.settings[23]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[24]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToWidgets'
				value={noiseToWidgets ? 'on' : 'off'}
				label={currentTranslate.settings[25]}
				description={currentTranslate.settings[26]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableWidgetBorder'
				value={disableWidgetBorder ? 'on' : 'off'}
				label={currentTranslate.settings[27]}
				description={currentTranslate.settings[28]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[29]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToActionCenter'
				value={noiseToActionCenter ? 'on' : 'off'}
				label={currentTranslate.settings[30]}
				description={currentTranslate.settings[31]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableActionCenterBorder'
				value={disableActionCenterBorder ? 'on' : 'off'}
				label={currentTranslate.settings[32]}
				description={currentTranslate.settings[33]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[34]}</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToMenu'
				value={noiseToMenu ? 'on' : 'off'}
				label={currentTranslate.settings[35]}
				description={currentTranslate.settings[36]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableMenuBorder'
				value={disableMenuBorder ? 'on' : 'off'}
				label={currentTranslate.settings[37]}
				description={currentTranslate.settings[38]}
			/>
		</div>
	);
};

export default LookNFeelSettings;
