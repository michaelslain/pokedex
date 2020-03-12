import * as React from 'react';
import './type.css';

export default function Type({ type }) {
	const [color, setColor] = React.useState({});

	React.useEffect(() => {
		switch (type) {
			case 'normal':
				setColor({ background: '#9c9c9c' }); // grey
				break;
			case 'fighting':
				setColor({ background: '#c46464' }); // pastel red
				break;
			case 'flying':
				setColor({ background: '#6f8fa6' }); // blue-grey
				break;
			case 'poison':
				setColor({ background: '#953ba3' }); // magenta
				break;
			case 'ground':
				setColor({ background: '#c98d00' }); // tan
				break;
			case 'rock':
				setColor({ background: '#827351' }); // grey-tan
				break;
			case 'bug':
				setColor({ background: '#427a59' }); // elder green
				break;
			case 'ghost':
				setColor({ background: '#521d8f' }); // purple
				break;
			case 'steel':
				setColor({ background: '#636363' }); // dark grey
				break;
			case 'fire':
				setColor({ background: '#ff8800' }); // orange
				break;
			case 'water':
				setColor({ background: '#0088ff' }); // cerulean blue
				break;
			case 'grass':
				setColor({ background: '#009e35' }); // green
				break;
			case 'electric':
				setColor({ background: '#ffe600' }); // yellow
				break;
			case 'psychic':
				setColor({ background: '#6100c2' }); // indigo
				break;
			case 'ice':
				setColor({ background: '#009ec2' }); // teal-ish
				break;
			case 'dragon':
				setColor({ background: '#461775' }); // dark purple
				break;
			case 'dark':
				setColor({ background: '#212121' }); // almost black
				break;
			case 'fairy':
				setColor({ background: '#e80093' }); //pink
				break;
		}
	}, []);

	return (
		<button className="type" style={color}>
			{type}
		</button>
	);
}
