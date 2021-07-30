import React from 'react';
import { connect } from 'react-redux';

const Taskbar = ({ timeReducer, weatherReducer }) => {
	return (
		<div id='taskbar'>
			{timeReducer.seconds}
			{weatherReducer.now.condition.description}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, null)(Taskbar);
