import React from 'react';

const Searchbar = () => {
	return (
		<div className='searchbar'>
			<i className='searchIcon icon-ic_fluent_search_24_regular'></i>
			<input
				type='search'
				className='searchInput'
				placeholder='Type here to search'
			/>
		</div>
	);
};

export default Searchbar;
