var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
                    // {test: /\.ts$/, loader: 'ts'},
                    {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
                        // exclude: [/\.(spec|e2e)\.ts$/]
                    },
                    /* Embed files. */
                    { 
                        test: /\.(html|css)$/, 
                        loader: 'raw-loader'
                        // exclude: /\.async\.(html|css)$/
                    },
                ]         
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

};
