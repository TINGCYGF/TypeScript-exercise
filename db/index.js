"use strict";
//定义一个操作mysql数据库的类       注意：要实现泛型接口 这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        console.log('数据库建立连接');
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            }
        ];
        return list;
    };
    return MysqlDb;
}());
//定义一个操作mssql数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log('数据库建立连接');
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            }
        ];
        return list;
    };
    return MsSqlDb;
}());
//操作用户表   定义一个User类和数据表做映射
/*
class User{
    username:string | undefined;
    password:string | undefined;
}


var u=new User();
u.username='张三111';
u.password='123456';


var oMysql=new MysqlDb<User>(); //类作为参数来约束数据传入的类型
oMysql.add(u);

*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三2222';
u.password = '123456';
var oMssql = new MsSqlDb();
oMssql.add(u);
//获取User表 ID=4的数据
var data = oMssql.get(4);
console.log(data);