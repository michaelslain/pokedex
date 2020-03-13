import React from 'react';
import './App.css';
import Browser from './containers/browser';
import PokemonPage from './containers/pokemonPage';
import AllPokemon from './containers/allPokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Browser} />
				<Route path="/pokemon" exact component={AllPokemon} />
				<Route path="/pokemon/:query" component={PokemonPage} />
			</Switch>
		</Router>
	);
}

export default App;
