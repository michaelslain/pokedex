import * as React from 'react';
import pokemon from 'pokemon';
import HeaderRecommend from './headerRecommend';
import './headerDropDown.css';

export default function HeaderDropDown({ value, onChangeQuery, bar, input }) {
	const [style, setStyle] = React.useState({ display: 'none' });
	const [autoFills, setAutoFills] = React.useState([]);

	React.useEffect(() => {
		if (value === '') {
			setStyle({ display: 'none' });
		} else {
			const rect = bar.current.getBoundingClientRect();

			setStyle({
				display: 'block',
				left: rect.left + 'px'
			});

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
		<div className="header-drop-down" style={style}>
			{autoFills.map((a, i) => {
				return (
					<HeaderRecommend
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
