import * as React from 'react';
import './pokemonPage.css';
import LoadingPage from './loadingScreen';
import FakePokemon from './fakePokemon';
import PokemonInfo from '../components/pokemonInfo';
import MissingNo from './missingNo';
import PokemonImage from '../components/pokemonImage';
import Header from '../components/header';
import { useParams } from 'react-router-dom';

export default function PokemonPage({ onReload }) {
	const [info, setInfo] = React.useState(null);
	const { query } = useParams();

	React.useEffect(() => {
		handleFetchInfo();
	}, []);

	async function handleFetchInfo() {
		fetch('https://pokeapi.co/api/v2/pokemon/' + query)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return 'RIP';
				}
			})
			.then((data) => {
				if (data === 'RIP') {
					setInfo(data);
				} else {
					handleOrganizeData(data);
				}
			});
	}

	function handleOrganizeData(data) {
		const { species, sprites, id, weight, types, stats } = data;

		const newObj = {
			name: species.name.charAt(0).toUpperCase() + species.name.slice(1),
			img: sprites.front_default,
			num: id,
			weight: weight === 69 ? weight + ' 👍' : weight,
			types: types.map((t) => {
				return t.type.name;
			}),
			stats: () => {
				let obj = {};

				stats.forEach((s) => {
					const value = s.base_stat === 69 ? s.base_stat + ' 👍' : s.base_stat;
					const key = s.stat.name.replace(/-/g, '');

					obj[key] = value;
				});

				return obj;
			},
		};

		setInfo(newObj);
	}

	if (info === null) return <LoadingPage />;

	if (query === 'missing no') return <MissingNo />;

	if (query === 'missingno') return <MissingNo />;

	if (query === 'missingno.') return <MissingNo />;

	if (query === 'missing no.') return <MissingNo />;

	if (info === 'RIP') return <FakePokemon />;

	return (
		<>
			<Header onReload={onReload} />
			<div className="overall-info-container">
				<PokemonImage info={info} />
				<PokemonInfo info={info} />
			</div>
		</>
	);
}
