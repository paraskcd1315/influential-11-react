/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

import InputSwitch from '../InputSwitch';
import InputText from '../InputText';

const MainSettings = ({
	style,
	options,
	handleTextChange,
	handleSwitchChange
}) => {
	const { username, hideIconLabels, twentyFourHourTime } = options;

	return (
		<div className='settings-main page' style={style}>
			<InputText
				onChange={handleTextChange}
				inputName='username'
				value={username}
				label='Username'
				placeholder='Enter your Display Name'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideIconLabels'
				value={hideIconLabels ? 'on' : 'off'}
				label='Hide Icon Labels'
				description='This setting hides the App Names, from the Explorer and Pinned Apps.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='twentyFourHourTime'
				value={twentyFourHourTime ? 'on' : 'off'}
				label='24 Hour Time'
				description='This setting enables 24 Hour Time.'
			/>
		</div>
	);
};

export default MainSettings;
