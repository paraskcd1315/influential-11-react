import React from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions/time';
import { updateWeather } from '../actions/weather';
import { Time } from '../libs/Time';

import Taskbar from './Taskbar';

const Common = ({ updateTime, updateWeather }) => {
	window.api.weather.observeData((newWeatherData) => {
		updateWeather(newWeatherData);
	});
	setInterval(() => {
		Time({
			twentyfour: false,
			zeroPadding: true,
			callback: (t) => {
				updateTime({
					hours: t.hour(),
					minutes: t.minute(),
					seconds: t.seconds(),
					date: t.date(),
					month: t.month(),
					year: t.year()
				});
			}
		});
	}, 1000);
	return (
		<>
			<Taskbar />
		</>
	);
};

export default connect(null, { updateTime, updateWeather })(Common);
