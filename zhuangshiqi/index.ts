function logClass(target:any){
  console.log(target);
  return class extends target{
    apiUrl:any='我是修改后的数据';
    getData(){
      this.apiUrl=this.apiUrl+'----';
      console.log(this.apiUrl);
    }
  }
}


@logClass
class HttpClient{
  public apiUrl:string | undefined;
  constructor(){
    this.apiUrl='我是构造函数里面的apiUrl';
  }
  getData(){
    console.log(this.apiUrl);
  }
}

var http=new HttpClient();
http.getData();
