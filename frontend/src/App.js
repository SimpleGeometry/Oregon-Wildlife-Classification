import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Construction from './components/Construction';
import DataEmb from './components/DataEmb';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/about" component={About}/>
				<Route path="/construction" component={Construction}/>
				<Route path="/dataset-embedding" component={DataEmb}/>
				<Route component={Error}/>
			</Switch>
		</BrowserRouter>
  );
}

export default App;
