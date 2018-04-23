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
				scss: path.resolve(__dirname, 'src/scss'),
				js: path.resolve(__dirname, 'src/js')
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
					use: [
						{
							loader: 'style-loader' // creates style nodes from JS strings
						},
						{
							loader: 'css-loader' // translates CSS into CommonJS
						},
						{
							loader: 'sass-loader' // compiles Sass to CSS
						}
					],
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
