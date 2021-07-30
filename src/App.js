import React from 'react';
import Common from './components/Common';

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
