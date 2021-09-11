/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
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
			<ResetButton callback={handleColorReset} title={`Reset Color Settings`} />
			<div className='settings-label'>Start Button Colors</div>
			<InputColor
				inputName='startButtonColor1'
				color={startButtonColor1}
				label='Highlight Start Button Color'
				description='The color that makes the Gradient Effect on the Start Button.'
			/>
			<InputColor
				inputName='startButtonColor2Light'
				color={startButtonColor2Light}
				label='Start Button Color'
				description='The Main Start Button Background Color.'
			/>
			<InputColor
				inputName='startButtonColor3Light'
				color={startButtonColor3Light}
				label='Start Button Color Pressed'
				description='The Main Start Button Background Color when Start Menu is Open.'
			/>
			<br />
			<div className='settings-label'>Widget Component Colors</div>
			<InputColor
				inputName='backgroundColorLight'
				color={backgroundColorLight}
				label='Background Color'
				description='Background Color of all Components.'
			/>
			<InputColor
				inputName='backgroundButtonColorLight'
				color={backgroundButtonColorLight}
				label='Background Buttton Color'
				description='Background Color of all Button Components.'
			/>
			<InputColor
				inputName='textColorLight'
				color={textColorLight}
				label='Text Color'
				description='Color of all Text Components.'
			/>
			<InputColor
				inputName='borderColorLight'
				color={borderColorLight}
				label='Border Color'
				description='Color of all Border Components.'
			/>
		</div>
	);
};

export default ColorSettings;
