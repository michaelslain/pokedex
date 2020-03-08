import * as React from 'react';
import './dropDown.css';

export default function DropDown({ value }) {
	const [display, setDisplay] = React.useState({ display: 'none' });

	React.useEffect(() => {
		if (value === '') {
			setDisplay({ display: 'none' });
		} else {
			setDisplay({ display: 'block' });
		}
	}, [value]);

	return (
		<div className="drop-down" style={display}>
			Hello
		</div>
	);
}
