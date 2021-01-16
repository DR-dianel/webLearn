// 函数是一等公民
// 函数 输入 输出

function add2(x: number, y: number): number {
  return x + y;
}

let result = add2(1, 2);

// 可选参数
function add3(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}

let add4: (x: number, y: number, z?: number) => number;

// interface 描述函数类型
interface ISum {
  (x: number, y: number, z?: number): number;
}

// 类型推论 没有明确指定类型时，自己推断是什么类型
let str = "str";

// 联合类型
let numberOrString: number | string;
numberOrString = "abc";
numberOrString = 2134;
// 只能访问联合类型的共有属性
numberOrString.valueOf;
// 如果希望访问某个属性的方法 —— 类型断言

// 类型断言：说明自己更了解这个类型是什么，强行指定这个类型。

function getLength(input: string | number): number {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    const number = input as number;
    return number.toString().length;
  }
}

// type guard 使用 if else typeof 将在判断作用域中自动缩小 type 类型

function getLength2(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}
