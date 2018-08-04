const path = require('path');

module.exports = {
  entry: {
    vendor: ['styled-components'],
    app1: '../yalp-header-service/client/index.jsx',
    app2: '../yalp-gallery-service/client/index.jsx',
    app3: '../yalp-reviews-service/client/index.jsx'
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }
    ]
  },
  resolve: { 
    extensions: ['.js', '.jsx'], 
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
  },
  optimization: {
    runtimeChunk: {
      name: "vendor"
    },
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  }  
}