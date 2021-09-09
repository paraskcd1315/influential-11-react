/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import InputColor from '../InputColor';

const ColorSettings = ({ style, options }) => {
	const {
		startButtonColor1,
		startButtonColor2Dark,
		startButtonColor2Light,
		startButtonColor3Light,
		startButtonColor3Dark,
		backgroundColorLight,
		backgroundButtonColorLight,
		textColorLight,
		borderColorLight,
		backgroundColorDark,
		backgroundButtonColorDark,
		textColorDark,
		borderColorDark
	} = options;

	return (
		<div className={'settings-individual-widgets page'} style={style}>
			<div className='settings-label'>Overall Color Settings</div>
			<hr />
			<div className='settings-label'>StartButton Colors</div>
			<InputColor
				inputName='startButtonColor1'
				color={startButtonColor1}
				label='Highlight Start Button Color'
				description='The color that makes the Gradient Effect on the Start Button.'
			/>
			<div className='settings-label'>Light Color Settings</div>
			<hr />
			<div className='settings-label'>StartButton Colors</div>
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
			<div className='settings-label'>Dark Color Settings</div>
			<hr />
			<div className='settings-label'>StartButton Colors</div>
			<InputColor
				inputName='startButtonColor2Dark'
				color={startButtonColor2Dark}
				label='Start Button Color'
				description='The Main Start Button Background Color.'
			/>
			<InputColor
				inputName='startButtonColor3Dark'
				color={startButtonColor3Dark}
				label='Start Button Color Pressed'
				description='The Main Start Button Background Color when Start Menu is Open.'
			/>
			<InputColor
				inputName='backgroundColorDark'
				color={backgroundColorDark}
				label='Background Color'
				description='Background Color of all Components.'
			/>
			<InputColor
				inputName='backgroundButtonColorDark'
				color={backgroundButtonColorDark}
				label='Background Buttton Color'
				description='Background Color of all Button Components.'
			/>
			<InputColor
				inputName='textColorDark'
				color={textColorDark}
				label='Text Color'
				description='Color of all Text Components.'
			/>
			<InputColor
				inputName='borderColorDark'
				color={borderColorDark}
				label='Border Color'
				description='Color of all Border Components.'
			/>
		</div>
	);
};

export default ColorSettings;
