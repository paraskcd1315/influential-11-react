/*
 * Copyright (c) 2021 Paras Khanchandani
 * All rights reserved.
 */

import React from 'react';
import Common from './components/Common';
import './sass/style.scss';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<>
				<Common />
			</>
		</Provider>
	);
};

export default App;
