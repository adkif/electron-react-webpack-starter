import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { rendererRulesProd } from './webpack.rules';
import { main, renderer } from './webpack.common';

const terserPlugin = new TerserPlugin({
	minify: TerserPlugin.swcMinify,
	parallel: true,
	extractComments: 'all',
	terserOptions: {
		compress: true
  }
});

export default [
	merge(main, {
		mode: 'production',
		devtool: 'source-map',
		optimization: {
			minimize: true,
			minimizer: [terserPlugin]
    }
	}),
	merge(renderer, {
		mode: 'production',
		devtool: 'source-map',
		module: {
			rules: rendererRulesProd
    },
		optimization: {
			minimize: true,
			minimizer: [
				new CssMinimizerPlugin({
					minify: CssMinimizerPlugin.swcMinify,
					parallel: true,
					minimizerOptions: {
						processorOptions: {
							parser: 'sugarss'
            }
					}
				}),
				terserPlugin
			]
		},
		plugins: [new MiniCssExtractPlugin()]
  }),
];
