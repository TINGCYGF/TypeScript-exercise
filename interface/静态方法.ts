class Person3{
  name:string;
  static age:number = 20;
  constructor(name:string){
    this.name=name;
  }
  run():string{//实例方法
    return `${this.name}在运动`
  }
  static print(){//静态方法（无法直接调用类属性）
    console.log('静态方法'+ Person3.age);//可以调用静态属性
  }
}

Person3.print();//调用静态方法
console.log(Person3.age);