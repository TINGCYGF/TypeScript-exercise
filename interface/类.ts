class Perso{
  name: string; //属性
  constructor(name:string) {
    this.name = name;
  }
  run():string{
    return `${this.name} 在跑步`
  }
}
class Web extends Perso{
  constructor(name:string) {
    super(name);//初始化父类构造函数
  }
  work():void{
    console.log(`${this.name} 在跑步`);
  }
}

let w = new Web('Ting')
w.run()
w.work()