const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    const isProd = env === "prod";
    return {
        entry: [
            './src/playground/auth.js'
        ],
        output: {
            path: path.resolve(__dirname, './public'),
            filename: './scripts/app.js'
            /*,publicPath: '/scripts/'*/
        },
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({ use: [{ loader: 'css-loader', options: { minimize: true, sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }] })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("./styles/styles.css")
        ],
        devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: "./public",
            historyApiFallback: true, /* instead of sending 404 , send index.html again*/
            port: 8000
        }
    };
};
