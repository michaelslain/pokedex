import * as React from 'react';
import './stats.css';

export default function Stats({ info }) {
	const stats = info.stats();
	const { speed, specialdefense, specialattack, defense, attack, hp } = stats;

	return (
		<div className="stats">
			<p className="stat">
				<font className="key">HP:</font> {hp}
			</p>
			<p className="stat">
				<font className="key">Defense:</font> {defense}
			</p>
			<p className="stat">
				<font className="key">Attack:</font> {attack}
			</p>
			<p className="stat">
				<font className="key">Speed:</font> {speed}
			</p>
			<p className="stat">
				<font className="key">Special Defense:</font> {specialdefense}
			</p>
			<p className="stat">
				<font className="key">Special Attack:</font> {specialattack}
			</p>
		</div>
	);
}
