const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

module.exports = () => {
	const config = {
		mode: 'development',
		entry: path.resolve(__dirname, './src/js/index.js'),
		output: {
			library: 'drDesilva',
			libraryTarget: 'amd',
			path: path.resolve('theme/js'),
			filename: 'index.js'
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
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
			})
		]
	};
	if (prod) {
		config.optimization = {
			minimize: true
		};
	}
	return config;
};
