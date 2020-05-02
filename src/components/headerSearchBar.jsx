import * as React from 'react';
import SearchIcon from '../images/search.svg';
import HeaderDropDown from './headerDropDown';
import './headerSearchBar.css';
import { useHistory } from 'react-router-dom';

export default function HeaderSearchBar({ onReload }) {
	const [query, setQuery] = React.useState('');
	const [borderRadius, setBorderRadius] = React.useState({ borderRadius: 50 });
	const searchBar = React.useRef(null);
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

			onReload();
		}
	}

	return (
		<>
			<div ref={searchBar} className="header-search-bar" style={borderRadius}>
				<img src={SearchIcon} alt="Q" className="header-search-icon" />
				<input
					ref={searchInput}
					type="text"
					className="header-search-input"
					value={query}
					onChange={(e) => setQuery(e.target.value.toLowerCase())}
					onKeyPress={handleRoute}
				/>
			</div>
			<HeaderDropDown
				value={query}
				onChangeQuery={setQuery}
				bar={searchBar}
				input={searchInput}
			/>
		</>
	);
}
