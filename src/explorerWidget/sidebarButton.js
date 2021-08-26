/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const SidebarButton = ({ id, active, icon, title, callback }) => {
	return (
		<div
			id={id}
			className={active ? 'sidebar-button active' : 'sidebar-button'}
			onClick={callback}>
			<div
				className='sidebar-active'
				style={
					active
						? { opacity: 1, pointerEvents: 'none' }
						: { opacity: 0, pointerEvents: 'none' }
				}></div>
			<div className='sidebar-icon' style={{ pointerEvents: 'none' }}>
				{icon()}
			</div>
			<div className='sidebar-title' style={{ pointerEvents: 'none' }}>
				{title}
			</div>
		</div>
	);
};

export default SidebarButton;
