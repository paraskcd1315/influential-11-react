/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const InputSwitch = ({ label, description, inputName, onChange, value }) => {
	return (
		<div className='settings-inputSwitch'>
			<div>
				<div className='settings-label'>{label}</div>
				<div className='settings-description'>{description}</div>
			</div>
			<div className='settings-switch'>
				<input
					type='checkbox'
					name={inputName}
					id={inputName}
					onChange={onChange}
					className='checkbox'
					checked={value === 'on' ? true : false}
				/>
				<label htmlFor={inputName} className='toggle'></label>
			</div>
		</div>
	);
};

export default InputSwitch;
