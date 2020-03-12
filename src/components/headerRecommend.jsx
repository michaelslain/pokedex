import * as React from 'react';
import './headerRecommend.css';

export default function HeaderRecommend({ text, onChangeQuery, input }) {
	function handleChangeQuery() {
		onChangeQuery(text);
		input.current.focus();
	}

	return (
		<div className="header-recommendation" onClick={handleChangeQuery}>
			{text}
		</div>
	);
}
