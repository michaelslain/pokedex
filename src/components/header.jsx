import * as React from 'react';
import HeaderSearchBar from './headerSearchBar';
import TitleImage from '../images/title.svg';
import Logo from '../images/logo.svg';
import './header.css';

export default function Header() {
	function handleGoHome() {
		window.location.href = 'http://localhost:3000/';
	}

	return (
		<div className="header">
			<div className="header-container">
				<img
					src={TitleImage}
					alt="Pokédex"
					className="header-logo"
					onClick={handleGoHome}
				/>
				<img
					src={Logo}
					alt="Pokédex"
					className="header-mini-logo"
					onClick={handleGoHome}
				/>
				<HeaderSearchBar />
			</div>
		</div>
	);
}
