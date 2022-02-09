# 装饰器简介
## 什么是装饰器
装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
## 装饰器的作用
装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。

### 理解 “元编程语法”
JavaScript中的元编程：https://www.cnblogs.com/liuyanlong/archive/2013/05/27/3102161.html

元编程一言以蔽之，就是用代码生成（操纵）代码。

元编程常见的应用场景很多，扩展（重构）语法、开发DSL、生成代码、根据特定场景自动选择代码优化、解决一些正交的架构设计问题、AOP等等。
所以元编程存在的目的，就是多提供了一个抽象层次。

## TS中启用装饰器
在tsconfig.json文件中，增加experimentalDecorators属性启用装饰器。
```json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```
## 如何使用装饰器
@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
1. 定义装饰器函数（也叫做：装饰器工厂）
```js
function Path(target:any) {
    console.log("I am decorator.")
    return function(obj) {
        return obj
    }
}
```
2. 在要使用装饰器的地方使用 @Path()
# 装饰器分类
## 类装饰器
类装饰器在类声明之前被声明（紧靠着类声明）。 

类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中（比如declare的类）。

类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
如果你要返回一个新的构造函数，你必须注意处理好原来的原型链。 在运行时的装饰器调用逻辑中 不会为你做这些。
举例

## 装饰器组合
## 属性装饰器
## 参数装饰器

参考文档
https://www.tslang.cn/docs/handbook/decorators.html#class-decorators
