import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { pathToFileURL } from 'url';
import { isDev } from '../shared';

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: !isDev,
			webSecurity: !isDev
		}
	});

	const url = isDev
		? new URL('http://localhost:4000')
		: pathToFileURL(path.join(__dirname, 'index.html'));
	url.hash = '#';

	win.loadURL(url.toString());
}

app.on('ready', createWindow);
