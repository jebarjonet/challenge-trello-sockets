'use strict'

const express = require('express')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

const init = require('./init')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const compiler = webpack(webpackConfig)

// configure Webpack hot reload
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    quiet: true,
    publicPath: webpackConfig.output.publicPath,
}))
app.use(webpackHotMiddleware(compiler))

// server logic
init(app, io)

http.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})
