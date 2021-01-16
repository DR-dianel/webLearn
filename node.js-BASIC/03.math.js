/* math模块 提供两个方法 
add(a,b);
mul(a,b);

*/

// function add(a, b) {
//   return(a + b);
// }

// function mul(a, b) {
//   return(a * b);
// }


// exports.add = add;
// exports.mul = mul;


// 升级写法
exports.add = function (a, b) {
  return(a + b);
}

exports.mul = function (a, b) {
  return(a * b);
}
