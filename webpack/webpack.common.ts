import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { PATH } from './webpack.path';

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
	baseUrl: './'
});

const esLintPlugin = new ESLintPlugin({ cache: true });
export const main: webpack.Configuration = {
	entry: {
		main: PATH.ENTRY.MAIN
  },
	target: 'electron-main',
	output: {
		path: PATH.OUTPUT,
		filename: '[name].js',
		clean: true
  },
	resolve: {
		plugins: [tsconfigPathsPlugin],
		extensions: ['.js', '.ts']
  },
	plugins: [esLintPlugin],
	node: {
		__dirname: false,
		__filename: false
  }
};

export const renderer: webpack.Configuration = {
	entry: {
		renderer: PATH.ENTRY.RENDERER
  },
	target: 'electron-renderer',
	output: {
		path: PATH.OUTPUT,
		filename: '[name].js'
  },
	resolve: {
		plugins: [tsconfigPathsPlugin],
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: PATH.STATIC.INDEX
    }),
		esLintPlugin
	]
};
