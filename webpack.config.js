const path = require('path');
module.exports = {
  entry:["core-js/fn/promise",'./src/main.js'], //if u use   entry:["babel-polyfill",'./src/main.js'] bundle size increased, so mention particvular polyfill u want 
  mode:"development",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath:"/" //use public path otherwise , auto is added  
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
                    options:{
                        attrs:["img:src"]
                    }
                }
            ]
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"images/[name][hash:8].[ext]" //   name:"[name].[ext]" . is enough/to differntialte using hash

                        }
                    }
                ]

            },
            {
                test:/\.(js)$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ],
                exclude:/node_modules/

            }
          
    ],
}

};


