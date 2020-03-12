import * as React from 'react';
import './recommend.css';

export default function Recommend({ text, onChangeQuery, input }) {
	function handleChangeQuery() {
		onChangeQuery(text);
		input.current.focus();
	}

	return (
		<div className="recommendation" onClick={handleChangeQuery}>
			{text}
		</div>
	);
}
