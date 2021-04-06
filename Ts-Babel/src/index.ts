class A {
  a: number = 1
}

let { x, y, ...z } = { x:1, y:2, a:3, b:4}
let m = {x, y, ...z}

//命名空间
namespace N {
  export const n = 1
}

let s = {} as A //类型断言
s.a = 1

const enum E { A } //常量枚举

export = s //默认导出