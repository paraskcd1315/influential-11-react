/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';

import { openStartMenu } from '../../actions/components';

const WidgetMaker = ({
	id,
	className,
	title,
	content,
	style,
	showPinButton,
	showMaximiseButton,
	showMenu,
	showBackButton,
	closeCallback,
	activeBackButton,
	backButtonCallback,
	menuButtonCallback,
	startMenu,
	onStartClick,
	openStartMenu,
	hideStartMenu,
	maximize,
	maximizeCallback
}) => {
	return (
		<div
			style={style}
			id={id}
			className={className + ' widget'}
			onClick={
				startMenu
					? () => {
							onStartClick();
							hideStartMenu();
							setTimeout(() => {
								openStartMenu(false);
							}, 250);
					  }
					: null
			}>
			{startMenu ? (
				''
			) : (
				<div className={'widget-header widget-header-' + id}>
					<div className='widget-buttons-left'>
						{showBackButton ? (
							<div
								className='backButton widget-btn'
								style={activeBackButton ? { opacity: 0.3 } : { opacity: 1 }}
								onClick={() => {
									backButtonCallback();
								}}>
								<i className='icon-ic_fluent_chevron_left_24_regular'></i>
							</div>
						) : (
							''
						)}
						{showMenu ? (
							<div
								className='hamburgerMenu widget-btn'
								onClick={() => {
									menuButtonCallback();
								}}>
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
							<button
								className='maximizeButton widget-btn'
								onClick={() => maximizeCallback()}>
								<i
									className={
										!maximize
											? 'icon-ic_fluent_maximize_16_regular'
											: 'icon-ic_fluent_restore_16_regular'
									}></i>
							</button>
						) : (
							''
						)}
						<button
							className='dismissButton widget-btn'
							onClick={() => closeCallback()}>
							<i className='icon-ic_fluent_dismiss_24_regular'></i>
						</button>
					</div>
				</div>
			)}
			<div className='widget-content'>{content}</div>
		</div>
	);
};

export default connect(null, { openStartMenu })(WidgetMaker);
