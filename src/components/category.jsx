import * as React from 'react';
import Element from './element';
import './category.css';

export default function Category({ title, elements }) {
	return (
		<>
			<h1 className="category-title">{title}</h1>
			<div className="element-gallery">
				{elements.map((e, i) => {
					return <Element key={i} text={e} />;
				})}
			</div>
		</>
	);
}
