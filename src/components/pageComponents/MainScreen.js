import React from 'react';

const MainScreen = ({
	allAppsOpen,
	moreWidgetsOpen,
	hideMainScreen,
	openAllApps,
	openMoreWidgets
}) => {
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
			<div className='header'>
				<div className='title'>Widgets</div>
				<button
					onClick={() => openMoreWidgets(!moreWidgetsOpen)}
					className='btn'>
					<div className='btn-title'>More</div>
					<i className='btn-chevron icon-ic_fluent_chevron_right_48_regular'></i>
				</button>
			</div>
		</div>
	);
};

export default MainScreen;
