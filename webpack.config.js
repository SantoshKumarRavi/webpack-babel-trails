const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:"development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Santhoshbundle2.js',
    publicPath :"/"
  },
  devServer:{
    static: 'dist'
},
module:{
    rules:[
        {
        test:/\.css$/,
        use:[
            {
                loader:"style-loader"
            },
            {
                loader:"css-loader"
            }
        ]
        }
    ],
}
};