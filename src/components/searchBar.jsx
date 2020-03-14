import * as React from 'react';
import SearchIcon from '../images/search.svg';
import DropDown from './dropDown';
import './searchBar.css';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
	const [query, setQuery] = React.useState('');
	const [borderRadius, setBorderRadius] = React.useState({ borderRadius: 50 });
	const searchInput = React.useRef(null);
	const history = useHistory();

	React.useEffect(() => {
		if (query === '') {
			setBorderRadius({ borderRadius: 50 });
		} else {
			setBorderRadius({ borderRadius: '20px 20px 0 0' });
		}
	}, [query]);

	function handleRoute(e) {
		const { keyCode, which, target } = e;

		const code = keyCode || which;

		if (code === 13 /* enter key */) {
			history.push('/pokemon/' + target.value);
		}
	}

	return (
		<>
			<div className="search-bar" style={borderRadius}>
				<img src={SearchIcon} alt="Q" className="search-icon" />
				<input
					ref={searchInput}
					type="text"
					className="search-input"
					value={query}
					onChange={e => setQuery(e.target.value.toLowerCase())}
					onKeyPress={handleRoute}
				/>
			</div>
			<DropDown value={query} onChangeQuery={setQuery} input={searchInput} />
		</>
	);
}
