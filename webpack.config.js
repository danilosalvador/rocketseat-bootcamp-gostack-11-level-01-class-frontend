const path = require('path');

module.exports = {
  //Arquivo inicial
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //pasta de saída
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //Configuração do servidor do WebPack para rodar em modo de Live Reloading
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  //Regras para conversão (transpilar) dos arquivos
  module: {
    rules: [
        //loaders
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /.*\.(gif||png||jpe?g)$/i,
          use: {
            loader: 'file-loader'
          }
        }
    ]
  }
}