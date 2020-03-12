import * as React from 'react';
import Title from '../components/title';
import SearchBar from '../components/searchBar';
import SeeAll from '../components/seeAll';
import './browser.css';

export default function Browser() {
	return (
		<div className="browser-container">
			<Title />
			<SearchBar />
			<SeeAll />
		</div>
	);
}
