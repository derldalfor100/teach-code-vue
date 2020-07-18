process.env.VUE_APP_VERSION = require('./package.json').version;

const local = process.argv && process.argv.indexOf('--local') > -1;

module.exports = {
  // config
  publicPath:  !local && process.env.NODE_ENV === 'production' ? "https://derldalfor100.github.io/teach-code-vue" : ''
}