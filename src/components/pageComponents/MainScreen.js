/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Weather from '../widgets/Weather';

import PinnedApps from '../individualComponents/PinnedApps';
import Music from '../widgets/Music';

const MainScreen = ({
	allAppsOpen,
	moreWidgetsOpen,
	hideMainScreen,
	openAllApps,
	openMoreWidgets,
	storageReducer,
	hideStartMenu
}) => {
	const [style, setStyle] = useState({ display: 'block' });

	useEffect(() => {
		if (storageReducer.dockIcons.length > 5) {
			setStyle({ display: 'grid' });
		} else {
			setStyle({ display: 'block' });
		}
	}, [storageReducer]);

	const renderWidgets = () => {
		if (!storageReducer.extraValues) {
			return <Weather startMenu={true} hideStartMenu={hideStartMenu} />;
		} else {
			if (
				!storageReducer.extraValues.weatherPin &&
				!storageReducer.extraValues.musicPin
			) {
				return <Weather startMenu={true} hideStartMenu={hideStartMenu} />;
			} else if (storageReducer.extraValues.weatherPin) {
				return <Weather startMenu={true} hideStartMenu={hideStartMenu} />;
			} else if (storageReducer.extraValues.musicPin) {
				return <Music startMenu={true} hideStartMenu={hideStartMenu} />;
			}
		}
	};

	return (
		<div
			className={
				allAppsOpen || moreWidgetsOpen
					? 'mainScreen pages-page disabled'
					: 'mainScreen pages-page'
			}
			style={hideMainScreen()}>
			<div className='header'>
				<div className='title'>Pinned</div>
				<button onClick={() => openAllApps(!allAppsOpen)} className='btn'>
					<div className='btn-title'>All Apps</div>
					<i className='btn-chevron icon-ic_fluent_chevron_right_48_regular'></i>
				</button>
			</div>
			<div style={style} id='pinnedApps' className='content'>
				<PinnedApps hideStartMenu={hideStartMenu} />
			</div>
			<div className='header'>
				<div className='title'>Widgets</div>
				<button
					onClick={() => openMoreWidgets(!moreWidgetsOpen)}
					className='btn'>
					<div className='btn-title'>More</div>
					<i className='btn-chevron icon-ic_fluent_chevron_right_48_regular'></i>
				</button>
			</div>
			<div id='pinnedWidgets' className='content'>
				{renderWidgets()}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, null)(MainScreen);
