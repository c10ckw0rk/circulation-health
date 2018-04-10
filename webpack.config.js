const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

module.exports = () => {
	const config = {
		mode: 'development',
		entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
		output: {
			library: 'circulation-health',
			libraryTarget: 'umd',
			path: path.resolve('theme/js'),
			filename: 'index.js'
		},
		resolve: {
			alias: {
				'@js': path.resolve(__dirname, 'src/js'),
				'@store': path.resolve(__dirname, 'src/js/store'),
				'@pages': path.resolve(__dirname, 'src/js/pages'),
				'@hoc': path.resolve(__dirname, 'src/js/hoc'),
				'@components': path.resolve(__dirname, 'src/js/components')
			}
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							babelrc: true
						}
					}
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader',
					exclude: /node_modules/
				},
				{
					test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
					loader: 'url-loader'
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
			}),
			new LiveReloadPlugin()
		]
	};
	if (prod) {
		config.optimization = {
			minimize: true
		};
	}
	if (dev) {
		config.watch = true;
		config.devtool = 'eval-source-map'; // slightly slower rebuilds but gives line and column accuracy
	}
	return config;
};
