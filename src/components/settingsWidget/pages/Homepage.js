/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';

import MenuButton from '../MenuButton';

const Homepage = ({
	style,
	openColorSettings,
	openLookNFeelSettings,
	openIndividualWidgetSettings,
	openMainSettings
}) => {
	return (
		<div className='settings-homepage page' style={style}>
			<MenuButton
				className='mainSettings'
				icon='icon-ic_fluent_device_meeting_room_24_regular'
				title='Main Widget Settings'
				description='All the Main Widget settings appear here'
				callback={openMainSettings}
			/>
			<MenuButton
				className='individualWidgetSettings'
				icon='icon-ic_fluent_dock_row_24_regular'
				title='Individual Widget Settings'
				description='All Individual Widget settings appear here'
				callback={openIndividualWidgetSettings}
			/>
			<MenuButton
				className='looknfeelSettings'
				icon='icon-ic_fluent_paint_brush_24_regular'
				title='Look and Feel'
				description='Settings related to the Looks of Components'
				callback={openLookNFeelSettings}
			/>
			<MenuButton
				className='colorSettings'
				icon='icon-ic_fluent_paint_bucket_24_regular'
				title='Color Settings'
				description='Settings related to the Colors of Components'
				callback={openColorSettings}
			/>
		</div>
	);
};

export default Homepage;
