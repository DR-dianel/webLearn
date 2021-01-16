// 可以使用 private protected readonly 等关键字


class Animal {
  readonly name:string
  constructor(name) {
    this.name = name;
  }
  protected run() {           // private 不希望外部使用，包含子类 protected 不希望外部使用、子类可以使用
    return `${this.name} is running`;
  }
}
const snake = new Animal("lily");
console.log(snake.run());

// 继承的特性
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaobao = new Dog("xiaobao");
console.log(xiaobao.run());
console.log(xiaobao.bark());

// 这里我们重写构造函数，注意在子类的构造函数中，必须使用 super 调用父类的方法，要不就会报错。
class Cat extends Animal {
  static categories = ["manal"];
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Meow, " + super.run();
  }
}
const maomao = new Cat("maomao");
console.log(maomao.run());
console.log(Cat.categories);