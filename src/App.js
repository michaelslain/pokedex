import React from 'react';
import './App.css';
import LoadingScreen from './containers/loadingScreen';
import Browser from './containers/browser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [loaded, setPageState] = React.useState(false);

	React.useEffect(() => {
		window.onload = () => {
			setPageState(true);
		};
	}, []);

	if (loaded === false) {
		return <LoadingScreen />;
	}

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Browser} />
				{/* <Route path="/all-pokemon" exact component={} /> */}
			</Switch>
		</Router>
	);
}

export default App;
