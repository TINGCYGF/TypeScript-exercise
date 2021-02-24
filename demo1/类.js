function Person(){
  this.name = 'Ting'; //属性
  //实例方法
  this.run = function (){
    console.log('hi');
  }
}
//添加静态方法
Person.getInfo = function (){
  console.log('我是静态方法');
}
Person.prototype.work = function (){
  console.log('haha');
}

let p = new Person()

// 继承（原型链+对象冒充组合继承模式）

function Web(){
  Person.call(this);
}

let w = new Web();
w.run(); //可以继承构造函数的属性和方法
w.work(); //不可以继承原型链上的方法

//原型链继承
function Web2(){}

Web2.prototype = new Person();//原型链继承
let b = new Web2();
b.run();
b.work();//方法都可以继承
