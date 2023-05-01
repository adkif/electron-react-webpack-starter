import { DefinePlugin } from 'webpack';
import { merge } from 'webpack-merge';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { main, renderer } from './webpack.common';
import { PATH } from './webpack.path';
import { rendererRules } from './webpack.rules';

export default [
	merge(main, {
		mode: 'development',
		devtool: 'inline-source-map'
  }),
	merge(renderer, {
		mode: 'development',
		devtool: 'inline-source-map',
		module: {
			rules: rendererRules
    },
		optimization: {
			runtimeChunk: 'single'
    },
		externalsPresets: { node: true },
		// @ts-ignore
		devServer: {
			static: PATH.OUTPUT,
			port: 4000,
			hot: true
    },
		plugins: [
			new ForkTsCheckerWebpackPlugin(),
			new DefinePlugin({
				global: 'globalThis'
      }),
    ]
	})
];
