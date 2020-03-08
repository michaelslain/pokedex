import * as React from 'react';
import './loadingScreen.css';

export default function LoadingScreen() {
	return (
		<h1 className="loading-msg">
			Loading<font className="dot one">.</font>
			<font className="dot two">.</font>
			<font className="dot three">.</font>
		</h1>
	);
}
