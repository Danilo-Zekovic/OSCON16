module.exports = {
  entry: './main.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 5001,
    inline: true,
    proxy: {
    '/uploadHandler*': {
      target: 'http://localhost:5000',
      secure: false,
      },
    },
  },
  module: {
    loaders: [
      {
        // Note this is a JavaScript regex
        test: /\.js$|.jsx$/,
        // Similar to .gitignore
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
