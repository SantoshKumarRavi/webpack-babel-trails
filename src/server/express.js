import express from "express"
import path from "path"
const server=express()
const webpoack=require("webpack")
const config=require("../../webpack.config")
const compiler=webpoack(config)
const webpackMiddleware=require("webpack-dev-middleware")(
    compiler,
    config.devServer
)
server.use(webpackMiddleware)
const staticMiddleware=express.static("dist")
server.use(staticMiddleware)
server.listen(8002,()=>{
    console.log("server listened");
})