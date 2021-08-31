/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CCButton = ({ isEnabled, toggleName, toggleIcon, toggleCallback }) => {
	const [enabled, setEnabled] = useState(isEnabled);

	useEffect(() => {
		setEnabled(isEnabled);
	}, [isEnabled]);

	return (
		<div className='toggleContainer'>
			<button
				id={toggleName}
				className={enabled ? 'ccToggle enabled' : 'ccToggle'}
				onClick={() => toggleCallback()}>
				<i className={toggleIcon + ' ccToggleIcon'}></i>
			</button>
			<div className='ccToggleName'>{toggleName}</div>
		</div>
	);
};

export default CCButton;
