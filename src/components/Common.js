import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions/time';
import { updateApps } from '../actions/apps';
import { updateMedia } from '../actions/media';
import { updateWeather } from '../actions/weather';
import { updateComms } from '../actions/comms';
import { updateResources } from '../actions/resources';
import { Time } from '../libs/Time';

import Taskbar from './Taskbar';

const Common = ({
	updateTime,
	updateWeather,
	updateApps,
	updateMedia,
	updateComms,
	updateResources
}) => {
	window.api.apps.observeData((newAppData) => {
		updateApps(newAppData);
	});
	window.api.media.observeData((newMediaData) => {
		updateMedia(newMediaData);
	});
	window.api.weather.observeData((newWeatherData) => {
		updateWeather(newWeatherData);
	});
	window.api.comms.observeData((newCommData) => {
		updateComms(newCommData);
	});
	window.api.resources.observeData((newResourcesData) => {
		updateResources(newResourcesData);
	});
	useEffect(() => {
		const newTime = setInterval(() => {
			Time({
				twentyfour: false,
				zeroPadding: true,
				callback: (t) => {
					updateTime({
						hours: t.hour(),
						minutes: t.minute()
					});
				}
			});
		}, 1000);

		return () => {
			clearInterval(newTime);
		};
	}, [updateTime]);
	return (
		<>
			<div
				className='wallpaper'
				style={{
					backgroundImage: 'url(https://wallpapercave.com/wp/wp8791332.jpg)',
					width: '100vw',
					height: '100vh',
					backgroundSize: 'contain'
				}}></div>
			<Taskbar />
		</>
	);
};

export default connect(null, {
	updateTime,
	updateWeather,
	updateApps,
	updateMedia,
	updateComms,
	updateResources
})(Common);
