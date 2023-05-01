import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const rendererRules = [
	{
		test: /\.ts(x?)$/,
		include: /app/,
		use: [{ loader: 'ts-loader' }]
  },
	{
		test: /\.(sa|sc|c)ss$/,
		use: [
			{
				// Adds CSS to the DOM by injecting a `<style>` tag
				loader: 'style-loader'
      },
			{
				// Interprets `@import` and `url()` like `import/require()` and will resolve them
				loader: 'css-loader'
      },
			{
				// Loader for webpack to process CSS with PostCSS
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: () => [autoprefixer]
          }
				}
			},
			{
				// Loads a SASS/SCSS file and compiles it to CSS
				loader: 'sass-loader'
      }
		]
	}
];

export const rendererRulesProd = [
	rendererRules[0],
	{
		mimetype: 'image/svg+xml',
		scheme: 'data',
		type: 'asset/resource',
		generator: {
			filename: 'icons/[hash].svg'
    }
	},
	{
		test: /.s?css$/,
		use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
  }
];
