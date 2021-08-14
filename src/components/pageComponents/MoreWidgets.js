/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

const MoreWidgets = ({
	moreWidgetsOpen,
	showMoreWidgets,
	openMoreWidgets,
	hideMainScreen
}) => {
	return (
		<div
			className={
				moreWidgetsOpen
					? 'moreWidgets pages-page'
					: 'moreWidgets pages-page disabled'
			}
			style={showMoreWidgets()}>
			<div className='header'>
				<div className='title'>Widgets</div>
				<button
					onClick={() => {
						openMoreWidgets(!moreWidgetsOpen);
						hideMainScreen();
					}}
					className='btn'>
					<i className='btn-chevron-back icon-ic_fluent_chevron_left_48_regular'></i>
					<div className='btn-title-back'>Back</div>
				</button>
			</div>
		</div>
	);
};

export default MoreWidgets;
