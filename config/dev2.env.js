'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod2.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_URL: "'http://localhost:8080'"
})
