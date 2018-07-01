const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

module.exports = () => {
	const config = {
		mode: 'development',
		entry: [path.resolve(__dirname, './src/main.js')],
		output: {
			library: 'circulation-health',
			libraryTarget: 'umd',
			path: path.resolve('theme/assets'),
			filename: dev ? '[name].js' : '[name].[hash].js',
			chunkFilename: '[name].bundle.js'
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
		config.mode = 'production';
		config.optimization = {
			minimize: true
		};
		config.plugins = [
			...config.plugins,
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional,
				filename: dev ? '[name].css' : '[name].[hash].css',
				chunkFilename: '[id].css'
			})
		];
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								minimize: {
									safe: true
								}
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[path][name].[ext]',
								outputPath: path.resolve('theme/img')
							}
						}
					]
				}
			]
		};

		config.devtool = 'eval-source-map'; // slightly slower rebuilds but gives line and column accuracy
		config.externals = {
			react: 'React',
			'react-dom': 'ReactDOM',
			classnames: 'classNames',
			axios: 'axios',
			'prop-types': 'PropTypes',
			'react-router-dom': 'ReactRouterDOM'
		};
	}

	if (dev) {
		config.watch = true;
		config.devtool = 'eval-source-map'; // slightly slower rebuilds but gives line and column accuracy
		config.module = {
			...config.module,
			rules: [
				...config.module.rules,
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
				}
			]
		};
	}

	return config;
};
