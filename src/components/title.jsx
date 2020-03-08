import * as React from 'react';
import TitleImage from '../images/title.svg';
import './title.css';

export default function Title() {
	return <img src={TitleImage} alt="Pokédex" className="title" />;
}
