/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import InputSwitch from '../InputSwitch';

const LookNFeelSettings = ({ style, options, handleSwitchChange }) => {
	const {
		noiseToTaskbar,
		disableTaskbarBorder,
		monochromeStartButton,
		noiseToWidgets,
		disableWidgetBorder,
		noiseToStartmenu,
		disableStartmenuBorder
	} = options;
	return (
		<div className={'settings-looknfeel page'} style={style}>
			<div className='settings-label'>Taskbar Related Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToTaskbar'
				value={noiseToTaskbar ? 'on' : 'off'}
				label='Disable Background Noise effect'
				description='Disable Background Noise effect which is enabled by default in the Taskbar.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableTaskbarBorder'
				value={disableTaskbarBorder ? 'on' : 'off'}
				label='Disable Border'
				description='Disable Border effect which is enabled by default in the Taskbar.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='monochromeStartButton'
				value={monochromeStartButton ? 'on' : 'off'}
				label='Monochrome Start Button'
				description='Make the Start Button of one Color Similar to Windows 10, i.e, either dark or light.'
			/>
			<br />
			<div className='settings-label'>Start Menu Related Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToStartmenu'
				value={noiseToStartmenu ? 'on' : 'off'}
				label='Disable Background Noise Effect'
				description='Disable Background Noise effect which is enabled by default in the Start Menu.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableStartmenuBorder'
				value={disableStartmenuBorder ? 'on' : 'off'}
				label='Disable Border'
				description='Disable Border effect which is enabled by default in the Start Menu.'
			/>
			<br />
			<div className='settings-label'>Widget Related Settings</div>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='noiseToWidgets'
				value={noiseToWidgets ? 'on' : 'off'}
				label='Enable Background Noise effect'
				description='Enable Background Noise effect which is disabled by default in Widgets.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='disableWidgetBorder'
				value={disableWidgetBorder ? 'on' : 'off'}
				label='Disable Border'
				description='Disable Border effect which is enabled by default in Widgets.'
			/>
		</div>
	);
};

export default LookNFeelSettings;
