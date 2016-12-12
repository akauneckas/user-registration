let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('styles.css');

const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
                    {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
                        // exclude: [/\.(spec|e2e)\.ts$/]
                    },
                    { 
                        test: /\.(html|less|css)$/, 
                        loader: 'raw-loader'
                    },
					{
						test:  /\.(less|css)$/, 
						loader:	extractCSS.extract("style-loader", "css-loader!less-loader")
					}
                ]         
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
		// new DedupePlugin(),
		// new UglifyJsPlugin({
			// beautify: false, //prod
			// output: {
			  // comments: false
			// }, //prod
			// mangle: {
			  // screw_ie8: true
			// }, //prod
			// compress: {
			  // screw_ie8: true,
			  // warnings: false,
			  // conditionals: true,
			  // unused: true,
			  // comparisons: true,
			  // sequences: true,
			  // dead_code: true,
			  // evaluate: true,
			  // if_return: true,
			  // join_vars: true,
			  // negate_iife: false // we need this for lazy v8
			// },
		// }),
		extractCSS
    ]

};
