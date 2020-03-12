import React from 'react';
import './App.css';
import LoadingScreen from './containers/loadingScreen';
import Browser from './containers/browser';
import PokemonPage from './containers/pokemonPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Browser} />
				{/* <Route path="/all-pokemon" exact component={} /> */}
				<Route path="/pokemon/:query" component={PokemonPage} />
			</Switch>
		</Router>
	);
}

export default App;
