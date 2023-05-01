import * as path from 'path';

export const PATH = {
	RENDERER: path.join(__dirname, '/app', 'renderer'),
	MAIN: path.join(__dirname, '/app', 'main'),
	SHARED: path.join(__dirname, '/app', 'shared'),
	OUTPUT: path.resolve(__dirname, '..', 'build'),
	ENTRY: {
		RENDERER: '/app/renderer/renderer.tsx',
		MAIN: '/app/main/index.ts'
  },
	STATIC: {
		INDEX: path.resolve(__dirname, '/app/renderer/index.html')
  }
};
