// 引入其他的模块
// 在node中，通过require() 函数来引入外部的模块
/*
  在 node 中，通过 require() 可以传递一个文件的路径作为参数，node将会自动根据该路径引入外部模块
  这里如果使用相对路径，必须以.或..开头  
*/


var md = require("./03.learn_node.js");
var math = require("./03.math.js");

console.log(math.add(1,2));
console.log(math.mul(4,5));