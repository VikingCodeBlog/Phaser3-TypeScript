const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {
  const appTarget = env.ENV_TARGET || 'dev';
  return {
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, './'),
      compress: true,
      port: 9000,
      liveReload: true,
      writeToDisk: true,
      watchOptions: {
        ignored: /node_modules/
      }
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/(.*)enviroment(\.*)/, function (resource) {
        resource.request = resource.request.replace(
          'enviroments/enviroment',
          `enviroments/enviroment${appTarget == 'dev' ? '' : '.' + appTarget}`
        );
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets') }
        ]
      })
    ]
  };
};
