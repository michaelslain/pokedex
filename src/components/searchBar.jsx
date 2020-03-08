import * as React from 'react';
import SearchIcon from '../images/search.svg';
import DropDown from './dropDown';
import './searchBar.css';

export default function SearchBar() {
	const [query, setQuery] = React.useState('');
	const [borderRadius, setBorderRadius] = React.useState({ borderRadius: 50 });

	React.useEffect(() => {
		if (query === '') {
			setBorderRadius({ borderRadius: 50 });
		} else {
			setBorderRadius({ borderRadius: '20px 20px 0 0' });
		}
	}, [query]);

	return (
		<>
			<div className="search-bar" style={borderRadius}>
				<img src={SearchIcon} alt="Q" className="search-icon" />
				<input
					type="text"
					className="search-input"
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
			</div>
			<DropDown value={query} />
		</>
	);
}
