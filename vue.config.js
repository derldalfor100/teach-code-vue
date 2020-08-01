process.env.VUE_APP_VERSION = require('./package.json').version;

const local = process.argv && process.argv.indexOf('--local') > -1;

module.exports = {
  publicPath: !local && process.env.NODE_ENV === 'production' ? "/teach-code-vue" : '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/variables.scss";
        @import "@/styles.scss";
        `,
      }
    }
  }
}