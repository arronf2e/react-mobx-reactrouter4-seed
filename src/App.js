import React, { Component } from 'react';
import './App.css';

import { Provider } from 'mobx-react';

import Routers from './routes';

import Store from './store';

const store = new Store();

class App extends Component {
	render() {
		return (
			<Provider {...store}>
				<Routers />
			</Provider>
		);
	}
}

export default App;
