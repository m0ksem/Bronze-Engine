const path = require('path')
const glob = require('glob')

module.exports = {
  root: 'src/demo',
  build: {
    outDir: '../../dist/',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, '..', "src", "**", "*.html")),
    },
  },
}