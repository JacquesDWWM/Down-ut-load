const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Point d'entrée de votre application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Dossier de sortie
    filename: 'bundle.js'  // Nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /.js$/,  // Traitement des fichiers .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  // Transpilation ES6
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // Votre fichier HTML source
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true  // Ouvre le navigateur après le lancement du serveur
  }
};