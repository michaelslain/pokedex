import React from 'react';
import './App.css';
import Browser from './containers/browser';
import PokemonPage from './containers/pokemonPage';
import AllPokemon from './containers/allPokemon';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [reloadCounter, setReloadCounter] = React.useState(1);

	function handleReload() {
		setReloadCounter(reloadCounter + 1);
	}

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Browser} />
				<Route path="/pokemon" exact component={AllPokemon} />
				<Route
					path="/pokemon/:query"
					component={() => <PokemonPage onReload={handleReload} />}
				/>
			</Switch>
		</Router>
	);
}

export default App;
