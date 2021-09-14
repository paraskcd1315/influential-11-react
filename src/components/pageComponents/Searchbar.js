/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import { connect } from 'react-redux';

import { searchQuery } from '../../actions/components';
import { activateSearchbar } from '../../actions/components';
import currentTranslate from '../../localizations';

const Searchbar = ({
	openAllApps,
	openMoreWidgets,
	hideMainScreen,
	componentsReducer,
	searchQuery,
	activateSearchbar
}) => {
	return (
		<div className='searchbar'>
			<i className='searchIcon icon-ic_fluent_search_24_regular'></i>
			<input
				type='search'
				className='searchInput'
				placeholder={currentTranslate.randomWords[1]}
				onFocus={() => {
					activateSearchbar(true);
					openAllApps(true);
					openMoreWidgets(false);
					hideMainScreen();
				}}
				onBlur={() => {
					if (componentsReducer.searchQuery === '') {
						activateSearchbar(false);
						openAllApps(false);
						hideMainScreen();
					}
				}}
				onKeyUp={(e) => {
					e.preventDefault();

					if (e.keyCode === 13) {
						let url = e.target.value,
							searchEngine = 'https://www.google.com/search?q=',
							regexp =
								/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
						if (
							e.target.value.substring(0, 8) === 'https://' ||
							e.target.value.substring(0, 7) === 'http://'
						) {
							window.location = e.target.value;
						} else if (regexp.test(url)) {
							let url = `https://${e.target.value}`;
							window.location = url;
						} else {
							window.location = `${searchEngine}${e.target.value}`;
						}
						e.target.value = '';
						searchQuery('');
						activateSearchbar(false);
						openAllApps(false);
					}

					if (e.target.value.length > 0) {
						searchQuery(e.target.value.toLowerCase());
					} else {
						searchQuery('');
					}
				}}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	componentsReducer: state.componentsReducer
});

export default connect(mapStateToProps, { activateSearchbar, searchQuery })(
	Searchbar
);
