import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Settings from './widgets/Settings';
import Weather from './widgets/Weather';
import { openExplorer, openMedia, openWeather } from '../actions/widget';
import Music from './widgets/Music';
import Explorer from './widgets/Explorer';
import ColorPicker from './widgets/ColorPicker';

const Desktop = ({
	widgetReducer,
	storageReducer: { extraValues },
	openWeather,
	openExplorer,
	openMedia
}) => {
	const {
		settingsOpen,
		weatherOpen,
		mediaOpen,
		explorerOpen,
		colorPickerOpen
	} = widgetReducer;

	useEffect(() => {
		if (extraValues) {
			if ('Weather' in extraValues && extraValues.Weather !== null) {
				openWeather(true);
			}
			if ('Explorer' in extraValues && extraValues.Explorer !== null) {
				openExplorer(true);
			}
			if ('Media' in extraValues && extraValues.Media !== null) {
				openMedia(true);
			}
		}
	}, [extraValues, openWeather, openExplorer, openMedia]);

	return (
		<div id='desktop'>
			{explorerOpen ? <Explorer /> : ''}
			{weatherOpen ? <Weather startMenu={false} /> : ''}
			{mediaOpen ? <Music startMenu={false} /> : ''}
			{settingsOpen ? <Settings /> : ''}
			{colorPickerOpen ? <ColorPicker /> : ''}
		</div>
	);
};

const mapStateToProps = (state) => ({
	widgetReducer: state.widgetReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, {
	openWeather,
	openExplorer,
	openMedia
})(Desktop);
