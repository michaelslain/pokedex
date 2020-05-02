import * as React from 'react';
import HeaderSearchBar from './headerSearchBar';
import TitleImage from '../images/title.svg';
import Logo from '../images/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header({ onReload }) {
	return (
		<div className="header">
			<div className="header-container">
				<Link to="/">
					<img src={TitleImage} alt="Pokédex" className="header-logo" />
				</Link>
				<Link to="/">
					<img src={Logo} alt="Pokédex" className="header-mini-logo" />
				</Link>
				<HeaderSearchBar onReload={onReload} />
			</div>
		</div>
	);
}
