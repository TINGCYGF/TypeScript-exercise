class Animal2 {
  name:string;
  constructor(name:string) {
    this.name=name;
  }
  eat(){   //具体吃什么?继承它的子类去实现,每一个子类的表现不一样
    console.log('吃的方法')
  }
}

class Dog extends Animal2{
  constructor(name:string){
    super(name)
  }
  eat(){
    return this.name+'吃粮食'
  }
}
class Cat extends Animal2{
  constructor(name:string){
    super(name)
  }
  eat(){
    return this.name+'吃老鼠'
  }
}
let d = new Dog('dd');
let a = new Cat('cc');

console.log(d.eat());
console.log(a.eat());