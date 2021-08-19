/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const MenuButton = ({ className, icon, title, description, callback }) => {
	return (
		<button onClick={() => callback()} className={className + ' settings-menu'}>
			<div className='settings-menu-stuff'>
				<div className='settings-menu-icon'>
					<i className={icon}></i>
				</div>
				<div className='settings-menu-info'>
					<div className='settings-menu-title'>{title}</div>
					<div className='settings-menu-description'>{description}</div>
				</div>
			</div>
			<div className='settings-menu-chevron'>
				<i className='icon-ic_fluent_chevron_right_24_regular'></i>
			</div>
		</button>
	);
};

export default MenuButton;
