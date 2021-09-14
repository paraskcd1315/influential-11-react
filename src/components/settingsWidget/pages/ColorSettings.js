/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../../localizations';

import InputColor from '../InputColor';
import ResetButton from '../ResetButton';

const ColorSettings = ({ style, options, handleColorReset }) => {
	const {
		startButtonColor1,
		startButtonColor2Light,
		startButtonColor3Light,
		backgroundColorLight,
		backgroundButtonColorLight,
		textColorLight,
		borderColorLight
	} = options;

	return (
		<div className={'settings-color page'} style={style}>
			<ResetButton
				callback={handleColorReset}
				title={currentTranslate.settings[69]}
			/>
			<div className='settings-label'>{currentTranslate.settings[70]}</div>
			<InputColor
				inputName='startButtonColor1'
				color={startButtonColor1}
				label={currentTranslate.settings[71]}
				description={currentTranslate.settings[72]}
			/>
			<InputColor
				inputName='startButtonColor2Light'
				color={startButtonColor2Light}
				label={currentTranslate.settings[73]}
				description={currentTranslate.settings[74]}
			/>
			<InputColor
				inputName='startButtonColor3Light'
				color={startButtonColor3Light}
				label={currentTranslate.settings[75]}
				description={currentTranslate.settings[76]}
			/>
			<br />
			<div className='settings-label'>{currentTranslate.settings[77]}</div>
			<InputColor
				inputName='backgroundColorLight'
				color={backgroundColorLight}
				label={currentTranslate.settings[78]}
				description={currentTranslate.settings[79]}
			/>
			<InputColor
				inputName='backgroundButtonColorLight'
				color={backgroundButtonColorLight}
				label={currentTranslate.settings[80]}
				description={currentTranslate.settings[81]}
			/>
			<InputColor
				inputName='textColorLight'
				color={textColorLight}
				label={currentTranslate.settings[82]}
				description={currentTranslate.settings[83]}
			/>
			<InputColor
				inputName='borderColorLight'
				color={borderColorLight}
				label={currentTranslate.settings[84]}
				description={currentTranslate.settings[85]}
			/>
		</div>
	);
};

export default ColorSettings;
