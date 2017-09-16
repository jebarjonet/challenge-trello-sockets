'use strict'

const express = require('express')

const init = (app) => {
    app.use(express.static('client'))
}

module.exports = init
