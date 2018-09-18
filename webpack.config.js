module.exports = {
  entry: `${__dirname}/client/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        resolve: {
          extensions: ['.css', '*', '.js', '.jsx'],
        },
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/public`,
  },
};
