/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../localizations';
import Music from '../widgets/Music';
import Weather from '../widgets/Weather';

const MoreWidgets = ({
	moreWidgetsOpen,
	showMoreWidgets,
	openMoreWidgets,
	hideMainScreen,
	hideStartMenu
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
				<div className='title'>{currentTranslate.randomWords[2]}</div>
				<button
					onClick={() => {
						openMoreWidgets(!moreWidgetsOpen);
						hideMainScreen();
					}}
					className='btn'>
					<i className='btn-chevron-back icon-ic_fluent_chevron_left_48_regular'></i>
					<div className='btn-title-back'>
						{currentTranslate.randomWords[3]}
					</div>
				</button>
			</div>
			<div id='allWidgets' className='content'>
				<Weather startMenu={true} hideStartMenu={hideStartMenu} />
				<Music startMenu={true} hideStartMenu={hideStartMenu} />
			</div>
		</div>
	);
};

export default MoreWidgets;
