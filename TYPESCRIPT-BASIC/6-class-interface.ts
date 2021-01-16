interface Radio {
  switchRadion(trigger: boolean): void;
}

interface Battery{
  checkBatteryStatus():void;
}

// 两个类有相似的方法，但是无法明确地确定哪一个为父类
class Car implements Radio {
  // 如果类的内部没有实现接口指定的方法，则报错

}

// 一个类可以实现多个方法
class Cellphone implements Radio,Battery {
  switchRadion(trigger: boolean) {

  }
  checkBatteryStatus(){

  }
}

// 接口之间也可以有集成的关系
interface RadioWithBattery extends Radio{

}
