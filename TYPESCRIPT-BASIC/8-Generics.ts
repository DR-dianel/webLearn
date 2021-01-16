// 泛型（Generics）
// 希望解决的问题：使用各种类型通用的函数之后，输出类型变为 any 
// 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function echo<T>(arg: T): T {
  return arg;
}
const str: string = "123";
const result = echo(str);

// 泛型约束
// 希望解决的问题：在函数中使用如 .length 等特定的方法。
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

echoWithLength('str')
const result3 = echoWithLength({length: 10})
const result4 = echoWithLength([1, 2, 3])



