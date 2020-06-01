const webpack = require('webpack')
const path = require('path')
const publicPath = path.join(__dirname, 'public')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: './src/main.ts',
    renderer: './src/renderer.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: publicPath + '/js',
    publicPath: 'js'
  },
  devServer: {
    contentBase: publicPath,
    port: 8888,
    inline: true,
    hot: true
  },
  target: 'electron-main',
  node: {
    __dirname: true
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx', '.json']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
