/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const WidgetMaker = ({
	id,
	className,
	title,
	content,
	style,
	showPinButton,
	showMaximiseButton,
	showMenu,
	showBackButton
}) => {
	return (
		<div style={style} id={id} className={className + ' widget'}>
			{className.includes('desktopWidget') ? (
				<div className='widget-header'>
					<div className='widget-buttons-left'>
						{showBackButton ? (
							<div className='widget-backButton'>
								<i className='icon-ic_fluent_chevron_left_24_regular'></i>
							</div>
						) : (
							''
						)}
						{showMenu ? (
							<div className='widget-hamburgerMenu'>
								<i className='icon-ic_fluent_line_horizontal_3_20_regular'></i>
							</div>
						) : (
							''
						)}
						<div className='widget-title'>{title}</div>
					</div>
					<div className='widget-buttons-right'>
						{showPinButton ? (
							<button className='pinButton widget-btn'>
								<i className='icon-ic_fluent_pin_24_regular'></i>
							</button>
						) : (
							''
						)}
						{showMaximiseButton ? (
							<button className='pinButton widget-btn'>
								<i className='icon-ic_fluent_maximize_24_regular'></i>
							</button>
						) : (
							''
						)}
						<button className='pinButton widget-btn'>
							<i className='icon-ic_fluent_dismiss_24_regular'></i>
						</button>
					</div>
				</div>
			) : (
				''
			)}
			<div className='widget-content'>{content}</div>
		</div>
	);
};

export default WidgetMaker;
