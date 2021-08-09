import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import PinnedApps from '../individualComponents/PinnedApps';

const MainScreen = ({
	allAppsOpen,
	moreWidgetsOpen,
	hideMainScreen,
	openAllApps,
	openMoreWidgets,
	storageReducer
}) => {
	const [style, setStyle] = useState({ display: 'block' });

	useEffect(() => {
		if (storageReducer.dockIcons.length > 5) {
			setStyle({ display: 'grid' });
		} else {
			setStyle({ display: 'block' });
		}
	}, [storageReducer]);

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
				<PinnedApps />
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
			<div id='pinnedWidgets' className='content'></div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(MainScreen);
