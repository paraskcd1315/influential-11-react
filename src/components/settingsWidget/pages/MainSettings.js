/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import InputRange from '../InputRange';

import InputSwitch from '../InputSwitch';
import InputText from '../InputText';

const MainSettings = ({
	style,
	options,
	handleTextChange,
	handleSwitchChange,
	handleRangeChange
}) => {
	const {
		username,
		hideIconLabels,
		twentyFourHourTime,
		blurRadius,
		borderRadius,
		hideFadeEffect,
		removeBackButton
	} = options;

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
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideFadeEffect'
				value={hideFadeEffect ? 'on' : 'off'}
				label='Disable Scroll Fade'
				description='This setting disables the fade effect when scrolling.'
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='removeBackButton'
				value={removeBackButton ? 'on' : 'off'}
				label='Remove Back Buttons'
				description='This setting removes the back buttons from the respected Widgets when not in use.'
			/>
			<InputRange
				onInput={handleRangeChange}
				inputName='blurRadius'
				value={blurRadius}
				label='Blur Strength'
				rangeMin={0}
				rangeMax={50}
				step={1}
				qtyCode='px'
			/>
			<InputRange
				onInput={handleRangeChange}
				inputName='borderRadius'
				value={borderRadius}
				label='Border Radius'
				rangeMin={0}
				rangeMax={2}
				step={0.1}
				qtyCode='rem'
			/>
		</div>
	);
};

export default MainSettings;
