/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const InputText = ({ onChange, inputName, value, label, placeholder }) => {
	return (
		<div className='settings-inputText'>
			<div className='settings-label'>{label}</div>
			<div className='settings-text'>
				<input
					type='text'
					name={inputName}
					id={inputName}
					className='settings-input-text'
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default InputText;
