import React from 'react';
import { connect } from 'react-redux';

import Settings from './widgets/Settings';

const Desktop = ({ widgetReducer }) => {
	return (
		<div id='desktop'>{widgetReducer.settingsOpen ? <Settings /> : ''}</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(Desktop);
