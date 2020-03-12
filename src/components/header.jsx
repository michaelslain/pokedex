import * as React from 'react';
import HeaderSearchBar from './headerSearchBar';
import TitleImage from '../images/title.svg';
import './header.css';

export default function Header() {
	function handleGoHome() {
		window.location.href = 'http://localhost:3000/';
	}

	return (
		<div className="header">
			<img
				src={TitleImage}
				alt="Pokédex"
				className="header-logo"
				onClick={handleGoHome}
			/>
			<HeaderSearchBar />
		</div>
	);
}
