/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const ResetButton = ({ callback, title }) => {
	return (
		<button onClick={() => callback()} className='settings-reset-button'>
			{title}
		</button>
	);
};

export default ResetButton;
