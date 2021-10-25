// set this file to idea webpack config file
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    alias: {
      '@': resolve('src')
    }
  }
}
