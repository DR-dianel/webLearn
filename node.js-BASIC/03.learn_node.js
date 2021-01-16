// 模块化 完整程序分成一个个小程序
//  - 在node中，一个js文件就是一个模块
//  - 在node中，每一个js文件中的js代码都是独立运行在一个函数中，模块中的变量和函数在其他模块中无法访问。闭包。

console.log("我是一个模块");

// 向外部暴露属性或方法

/* 通过 exports 向外部暴露变量和方法 */
exports.x = "我是learn_node.js中的 x"
exports.y = "我是learn_node.js中的 y"