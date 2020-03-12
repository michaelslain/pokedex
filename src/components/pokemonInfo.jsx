import * as React from 'react';
import Type from './type';
import './pokemonInfo.css';

export default function PokemonInfo({ info }) {
	return (
		<div className="info-container">
			<h1 className="num">{info.num + '.'}</h1>
			<h1 className="name">{info.name}</h1>
			<div className="type-gallery">
				{info.types.map((t, i) => {
					return <Type key={i} type={t} />;
				})}
			</div>
		</div>
	);
}
