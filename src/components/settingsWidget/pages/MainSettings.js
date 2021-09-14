/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../../localizations';

import InputRange from '../InputRange';
import InputSwitch from '../InputSwitch';
import InputText from '../InputText';
import ResetButton from '../ResetButton';

const MainSettings = ({
	style,
	options,
	handleTextChange,
	handleSwitchChange,
	handleRangeChange,
	handleMainReset
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
			<ResetButton
				callback={handleMainReset}
				title={currentTranslate.settings[41]}
			/>
			<InputText
				onChange={handleTextChange}
				inputName='username'
				value={username}
				label={currentTranslate.settings[0]}
				placeholder={currentTranslate.settings[1]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideIconLabels'
				value={hideIconLabels ? 'on' : 'off'}
				label={currentTranslate.settings[2]}
				description={currentTranslate.settings[3]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='twentyFourHourTime'
				value={twentyFourHourTime ? 'on' : 'off'}
				label={currentTranslate.settings[4]}
				description={currentTranslate.settings[5]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='hideFadeEffect'
				value={hideFadeEffect ? 'on' : 'off'}
				label={currentTranslate.settings[6]}
				description={currentTranslate.settings[7]}
			/>
			<InputSwitch
				onChange={handleSwitchChange}
				inputName='removeBackButton'
				value={removeBackButton ? 'on' : 'off'}
				label={currentTranslate.settings[8]}
				description={currentTranslate.settings[9]}
			/>
			<InputRange
				onInput={handleRangeChange}
				inputName='blurRadius'
				value={blurRadius}
				label={currentTranslate.settings[10]}
				rangeMin={0}
				rangeMax={50}
				step={1}
				qtyCode='px'
			/>
			<InputRange
				onInput={handleRangeChange}
				inputName='borderRadius'
				value={borderRadius}
				label={currentTranslate.settings[11]}
				rangeMin={0}
				rangeMax={2}
				step={0.1}
				qtyCode='rem'
			/>
		</div>
	);
};

export default MainSettings;
