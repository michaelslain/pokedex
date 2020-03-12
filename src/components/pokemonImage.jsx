import * as React from 'react';
import './pokemonImage.css';

export default function PokemonImage({ info }) {
	return (
		<div className="img-container">
			<img src={info.img} alt={info.name} className="img" />
		</div>
	);
}
