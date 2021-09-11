import React from 'react';

const ResetButton = ({ callback, title }) => {
	return (
		<button onClick={() => callback()} className='settings-reset-button'>
			{title}
		</button>
	);
};

export default ResetButton;
