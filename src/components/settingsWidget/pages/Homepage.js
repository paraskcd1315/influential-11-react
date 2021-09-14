/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import currentTranslate from '../../../localizations';

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
				title={currentTranslate.settings[61]}
				description={currentTranslate.settings[62]}
				callback={openMainSettings}
			/>
			<MenuButton
				className='individualWidgetSettings'
				icon='icon-ic_fluent_dock_row_24_regular'
				title={currentTranslate.settings[63]}
				description={currentTranslate.settings[64]}
				callback={openIndividualWidgetSettings}
			/>
			<MenuButton
				className='looknfeelSettings'
				icon='icon-ic_fluent_paint_brush_24_regular'
				title={currentTranslate.settings[65]}
				description={currentTranslate.settings[66]}
				callback={openLookNFeelSettings}
			/>
			<MenuButton
				className='colorSettings'
				icon='icon-ic_fluent_paint_bucket_24_regular'
				title={currentTranslate.settings[67]}
				description={currentTranslate.settings[68]}
				callback={openColorSettings}
			/>
		</div>
	);
};

export default Homepage;
