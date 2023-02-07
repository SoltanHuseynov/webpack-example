const path=require('path')
const HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports={
    devServer:{
        host:`localhost`,
    },
    //code development and code style
    mode:  `development`,
    /*  the entry point is the module that webpack uses to start 
        building its internal dependency graph.  
    */
    entry:"./src/app.js",
    /*
        the output property instructs webpack where to emit the bundle(s) and 
        what name to use for the file(s).
    */
    output:{
        filename:`[name].[contenthash].js`,
        path:path.join(__dirname,"public"),
    },
    // plugins are used for any other task that loaders can’t do.
    plugins:[
        new HtmlWebpackPlugin({
            template:`index.html`
        }) 
    ],
    module: {
        rules:[{
            test: /\.css$/i,
            use:[`style-loader`,`css-loader`]
         }]
      },
}
