//操作数据库的泛型类
class MysqlDb<T>{
  add(info:T):boolean{
    console.log(info);
    return true;
  }
}

//定义一个ArticleCate类对数据库进行验证
class ArticleCate{
  title:string | undefined;
  desc: string | undefined;
  status: number | undefined;
  constructor(params:{
    title:string | undefined;
    desc: string | undefined;
    status?: number | undefined;
  }) {
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}

let a = new ArticleCate({
  title: '分类',
  desc: '1234',
});
let Db = new MysqlDb<ArticleCate>();
Db.add(a);

