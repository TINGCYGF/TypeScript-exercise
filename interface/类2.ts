class Person2{
    name:string;  /*私有*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
}
