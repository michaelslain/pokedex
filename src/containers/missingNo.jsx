import * as React from 'react';
import MissingNoImage from '../images/missingno.png';
import Header from '../components/header';
import PokemonImage from '../components/pokemonImage';
import PokemonInfo from '../components/pokemonInfo';
import './missingNo.css';

export default function MissingNo() {
	const info = {
		name: 'MissingNo.',
		img: MissingNoImage,
		num: '',
		weight: 'Ń̜̰̀á͓̫̎N̰͋̓̓͟ͅ',
		types: [
			'normal',
			'fighting',
			'flying',
			'poison',
			'ground',
			'rock',
			'bug',
			'ghost',
			'steel',
			'fire',
			'water',
			'grass',
			'electric',
			'psychic',
			'ice',
			'dragon',
			'dark',
			'fairy'
		],
		stats: () => {
			return {
				speed: 'N̯͎͕̂̽͋̓͟a̮̭͑͘N̯͌',
				specialdefense: 'Ǹ̫͎͉̋͡aŅ̫̲̒̈̓͜͡',
				specialattack: 'Na̩͠N̦̏',
				defense: 'Ṋ̞̝͗͐̔a̛̟̥͘N̟̺̬̔́̃',
				attack: 'Na͚̲̝͈̅͑̅̎N̹̪̝͔͐̋͆̚',
				hp: 'N͕̍̓͜a̠̿N'
			};
		}
	};

	return (
		<>
			<Header />
			<div className="overall-info-container">
				<PokemonImage info={info} />
				<PokemonInfo info={info} />
			</div>
		</>
	);
}
