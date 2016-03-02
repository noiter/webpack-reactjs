module.exports = {
  entry: './modules/main.js',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', 
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
