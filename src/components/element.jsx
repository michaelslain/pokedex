import * as React from 'react';
import './element.css';
import { Link } from 'react-router-dom';

export default function Element({ text }) {
	return (
		<Link to={'/pokemon/' + text.toLowerCase()} className="all-pokemon-element">
			{text}
		</Link>
	);
}
