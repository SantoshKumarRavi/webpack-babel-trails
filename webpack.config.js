const path = require('path');
module.exports = {
  entry:['./src/main.js'],
  mode:"development",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
 },
 devServer:{
static:"dist"
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
        },
        {
            test:/\.html$/,
            use:[
                {
                    loader:"file-loader",
                    options:{
                        name:"[name].html"
                    }
                },
                {
                    loader:"extract-loader"
                },
                {
                    loader:"html-loader",
                }
            ]
            }
    ],
}

};


