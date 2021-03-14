import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import './App.css';

const App = () => {
	return (
		<HashRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About} />
			<Route path="/movie-detail" component={Detail} />
		</HashRouter>
	);
};

export default App;
