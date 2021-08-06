import React from 'react';
import { connect } from 'react-redux';

const StartMenu = () => {
	return (
		<div id='startMenu'>
			<div className='searchbar'>
				<input type='search' className='searchInput' />
			</div>
			<div className='header'>
				<div className='title'>Pinned</div>
				<button className='allApps'>A</button>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, { openStartMenu })(StartMenu);
