const btoa = require('btoa');
require("babel-runtime/regenerator")
import "./app.css"
import "./index.html"
var a=()=>{
    console.log(" checkking   checkking  checkking  checkking  checkking hi from babel 2015 plug in ");
}
var ab=async (args)=>{
const {a,b}=args
   await console.log("a  ==> ",a," b ===>",b," checkking   checkking  checkking  checkking  checkking hi from babel 2015 plug in ");
} 

ab({a:10,b:12})