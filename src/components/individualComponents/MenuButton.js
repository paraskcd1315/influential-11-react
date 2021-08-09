import React from 'react';

const MenuButton = ({ icon, title, callback }) => {
	return (
		<div onClick={callback} className='menuButton'>
			<i className={icon}></i>
			<div className='title'>{title}</div>
		</div>
	);
};

export default MenuButton;
