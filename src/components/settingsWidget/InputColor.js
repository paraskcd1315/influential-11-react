/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';

import { openColorPicker } from '../../actions/components';

const InputColor = ({
	label,
	description,
	color,
	inputName,
	openColorPicker
}) => {
	return (
		<div className='settings-inputColor'>
			<div>
				<div className='settings-label'>{label}</div>
				<div className='settings-description'>{description}</div>
			</div>
			<div className='settings-color'>
				<button
					style={{ backgroundColor: color }}
					onClick={(e) => {
						e.preventDefault();
						openColorPicker({
							color: color,
							inputName: inputName,
							label: label
						});
					}}></button>
			</div>
		</div>
	);
};

export default connect(null, { openColorPicker })(InputColor);
