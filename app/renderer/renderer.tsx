import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './styles.scss';
import { App } from './app';

const meta = document.createElement('meta');
meta.httpEquiv = 'Content-Security-Policy';
meta.content = "default-src 'self'; script-src 'self';";
document.head.appendChild(meta);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
