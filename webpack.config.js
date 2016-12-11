var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles.css');

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
		extractCSS
    ]

};
