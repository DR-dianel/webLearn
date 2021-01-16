// 对对象的形状（shape）进行描述
// Duck Typing（鸭子类型） 用来做类型的静态检查

interface Person {
  readonly id: number; // 只读
  name: string;
  age?: number; // 可选属性
}

let viking: Person = {
  name: "viking",
  age: 20,
  id: 1,
};
