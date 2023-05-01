import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { __IS_DEV__ } from '../shared';

function createWindow() {
	// Create the browser window.
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			...(!__IS_DEV__ && { contextIsolation: true, webSecurity: true })
		}
	});

	const url = __IS_DEV__
		? new URL('http://localhost:4000')
		: pathToFileURL(path.join(__dirname, 'index.html'));
	url.hash = '#';

	win.loadURL(url.toString());
}

app.on('ready', createWindow);
