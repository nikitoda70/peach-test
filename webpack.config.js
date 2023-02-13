const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin()
    ]
  }

  return config
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: PATHS.src,
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    clean: true
  },
  devServer: {
    port: 8080,
    hot: isDev
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: 'body',
      hash: false,
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}fonts/[name].[ext]`
        }
      },
    ]
  }
}