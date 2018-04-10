import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Store from './store/Store';

render(
	<Store>
		<App />
	</Store>,
	document.getElementById('app')
);
