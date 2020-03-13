import * as React from 'react';
import './seeAll.css';
import { Link } from 'react-router-dom';

export default function SeeAll() {
	return (
		<Link to="/pokemon" className="all-pokemon-link">
			See all Pokémon
		</Link>
	);
}
