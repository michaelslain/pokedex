import * as React from 'react';
import pokemon from 'pokemon';
import Recommend from './recommend';
import './dropDown.css';

export default function DropDown({ value, onChangeQuery, input }) {
	const [display, setDisplay] = React.useState({ display: 'none' });
	const [autoFills, setAutoFills] = React.useState([]);

	React.useEffect(() => {
		if (value === '') {
			setDisplay({ display: 'none' });
		} else {
			setDisplay({ display: 'block' });

			handleCreateAutoFills();
		}
	}, [value]);

	function handleCreateAutoFills() {
		const pokeNames = pokemon.all();

		const filteredNames = pokeNames.filter(p => {
			return p.toLowerCase().includes(value) === true;
		});

		setAutoFills(filteredNames);
	}

	return (
		<div className="drop-down" style={display}>
			{autoFills.map((a, i) => {
				return (
					<Recommend
						key={i}
						text={a.toLowerCase()}
						onChangeQuery={onChangeQuery}
						input={input}
					/>
				);
			})}
		</div>
	);
}
