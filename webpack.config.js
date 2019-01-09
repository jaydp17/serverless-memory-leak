const path = require('path');
const slsw = require('serverless-webpack');

const isProd = !slsw.lib.webpack.isLocal;
module.exports = {
  entry: slsw.lib.entries,
  mode: isProd ? 'production' : 'development',
  target: 'node',
    node: false,
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(process.cwd(), '.webpack/build'),
    filename: '[name].js',
  },
  optimization: {
    nodeEnv: false
  }
};
