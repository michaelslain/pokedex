import * as React from 'react';
import pokemon from 'pokemon';
import * as alphabet from 'alphabet';
import Header from '../components/header';
import LoadingScreen from './loadingScreen';
import Category from '../components/category';
import './allPokemon.css';

export default function AllPokemon() {
	const [categories, setCategories] = React.useState(null);

	React.useEffect(() => {
		const all = pokemon.all();
		const letters = alphabet.upper;

		let newObj = {};

		letters.forEach(l => {
			newObj[l] = [];
		});

		all.forEach(p => {
			const firstChar = p.charAt(0);
			newObj[firstChar].push(p);
		});

		setCategories(newObj);
	}, []);

	if (categories === null) {
		return <LoadingScreen />;
	}

	let categoryElements = [];

	for (let i in alphabet.upper) {
		const letter = alphabet.upper[i];

		const newElement = (
			<Category key={i} title={letter} elements={categories[letter]} />
		);

		categoryElements.push(newElement);
	}

	return (
		<>
			<Header />
			<div className="all-pokemon-container">
				<h1 className="all-pokemon-heading">All Pokémon</h1>
				<div className="heading-line"></div>
				{categoryElements}
			</div>
		</>
	);
}
