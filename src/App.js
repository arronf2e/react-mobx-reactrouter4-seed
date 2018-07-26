import React, { Component } from 'react';

import './App.css';

import { Provider } from 'mobx-react';

import Routers from './routes';

import Store from './store';

import ErrorBoundary from './components/errorboundary';

const store = new Store();

class App extends Component {

	render() {
		return (
			<ErrorBoundary>
				<Provider {...store}>
					{Routers}
				</Provider>
			</ErrorBoundary>
		);
	}

}

export default App;
