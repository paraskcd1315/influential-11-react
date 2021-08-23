import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Settings from './widgets/Settings';
import Weather from './widgets/Weather';
import { openWeather } from '../actions/widget';

const Desktop = ({
	widgetReducer,
	storageReducer: { extraValues },
	openWeather
}) => {
	const { settingsOpen, weatherOpen } = widgetReducer;

	useEffect(() => {
		if (extraValues) {
			if ('Weather' in extraValues && extraValues.Weather !== null) {
				openWeather(true);
			}
		}
	}, [extraValues, openWeather]);

	return (
		<div id='desktop'>
			{settingsOpen ? <Settings /> : ''}
			{weatherOpen ? <Weather startMenu={false} /> : ''}
		</div>
	);
};

const mapStateToProps = (state) => ({
	widgetReducer: state.widgetReducer,
	storageReducer: state.storageReducer
});

export default connect(mapStateToProps, { openWeather })(Desktop);
