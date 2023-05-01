import React, { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div className="d-flex container-fluid min-vh-100 flex-column align-items-center justify-content-center">
				<h1>Hi from React 🎉</h1>
				<h2>Bootstrap and Webpack</h2>
				<button className="btn btn-success">Primary button</button>
			</div>
		);
	}
}
