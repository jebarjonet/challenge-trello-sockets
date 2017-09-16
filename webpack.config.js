const webpack = require('webpack')
const path = require('path')

module.exports = {
    context: __dirname,
    devtool: 'eval',
    entry: [
        './client/main.js',
        'webpack-hot-middleware/client',
    ],
    output: {
        path: path.join(__dirname, 'client', 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    plugins: [
                        'transform-class-properties',
                    ],
                    presets: ['react', 'stage-0', 'es2015', 'react-hmre'],
                },
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css',
                    'less',
                ],
            },
        ],
    },
}
