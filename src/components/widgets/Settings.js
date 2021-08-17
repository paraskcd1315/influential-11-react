/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import WidgetMaker from '../individualComponents/WidgetMaker';

const Settings = ({ widgetReducer }) => {
	const [style, setStyle] = useState({
		opacity: 0,
		transform: 'translate(-50%, -40%)'
	});

	useEffect(() => {
		if (widgetReducer.settingsOpen) {
			setTimeout(() => {
				setStyle((state) => {
					return { ...state, opacity: 1, transform: 'translate(-50%, -50%)' };
				});
			}, 250);
		}
	}, [widgetReducer]);

	const settingsContent = () => {
		return <></>;
	};

	return (
		<WidgetMaker
			id={'settingsWidget'}
			className={'desktopWidget x-large'}
			title={'Settings'}
			style={style}
			content={settingsContent()}
		/>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(Settings);
