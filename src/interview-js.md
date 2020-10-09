---
title: 前端JS面试必须知道的几个点
date: 2018-05-17
isTimeLine: true
sidebar: true
isComment: true
categories:
- 关于技术
tags: 
- javaScript
- 前端
- 面试

vssue-title: interview-js
---


## I. 函数的三种定义方法

### 1.1 函数声明

```js
// ES5
function getSum()
function (){} //函数声明

// ES6
() => {} 如果 {} 内容只有一行 {} 和 return 关键字可省略
```

### 1.2 函数表达式

```js
// ES5
var sum = function getSum()

// ES6
let sum = () => {}
```

### 1.3 构造函数

```js
var sum = new GetSum(num1, num2)
```

> 三种方法的比较：

* 函数声明有预解析，而且函数声明的优先级高于变量声明；
* 使用 `Function` 构造函数定义函数的方式是一个函数表达式，这种方式会导致解析两次代码，从而影响性能。第一次解析常规的 js 代码，第二次解析传入构造函数的字符串。

## II. 函数在 ES5 中的4中调用模式

### 2.1 函数调用

该模式包含 函数名() 和匿名函数调用， `this` 指向 `window`

```js
function getSum(){
    console.log(this)
}
getSum()

(function(){
    console.log(this)
})()

var getSum = function(){
    console.log(this)
}
getSum()
```

### 2.2 方法调用

`对象.方法名()`, `this` 指向 对象

```js
var objList = {
    name: 'methods',
    getSum: function(){
        console.log(this)
    }
}
objList.getSum()
```

### 2.3 构造器调用

`new 构造函数名()`,`this` 指向构造函数

```js
function Person(){
    console.log(this)
}
var personOne = new Person();
```

### 2.4 间接调用

利用 `call` 和 `apply` 来实现，`this` 就是 `call` 和 `apply` 对应的第一个参数，如果不传值或者第一个为 `null`, `undefined` 时指向 `window`

```js
function foo(){
    console.log(this);
}
foo.apply('额是 apply 改变的 this 值');
foo.apply('额是 call 改变的 this 值');
```

## III. ES6中函数的调用

* 箭头函数不可以当做构造函数，也就是不能使用 `new` 关键字来实例化一个对象，否则会抛出错误
* 箭头函数的 `this` 是和定义时有关，和调用无关
* 调用就是函数调用模式

```js
(()=>{
    console.log(this)  // window
})

let fun = () => {
    console.log(this)  //window
}

fn()

let obj = {
    fun: function () {
        (() => {
            console.log(this) //obj
        })
    }
}
obj.fun
```

## IV. `call`、`apply` 和 `bind`

* IE5 之前不支持 `call` 和 `apply`，`bind` 是 ES5之后出来的
* `call` 和 `apply` 可以调用函数，改变 `this`，实现继承和借用别的对象的方法。

### 4.1 `call` 和 `apply` 定义

* 调用方法，用一个对象替换掉另一个对象(this)
* 对象.call(新 this 对象, 实参1, 实参2, 实参3...)
* 对象.apply(新 this 对象, [实参1, 实参2, 实参3...])

### 4.2 `call` 和 `apply` 用法

* a. 间接调用函数，改变作用域的 `this` 值
* b. 劫持其他对象的方法

```js
var foo = {
    name: 'lufei',
    logName: function(){
        console.log(this.name);
    }
}

var bar = {
    name: 'namei'
}

foo.logName.call(bar);  //namei
// 实质上是 call 改变了 foo 的 this 指向为 bar，并调用函数
```

* c. 两个函数实现继承

```js
    function Animal(name){
        this.name = name;
        this.showName = function(){
            console.log(this.name);
        }
    }

    function Cat(name){
        Animal.showName(this, name);
    }

    var cat = new Cat('White Cat');
    cat.showName();  // White Cat
```

* d. 为类数组(`arguments` 和 `nodeList`) 添加数组方法 `push` 和 `pop`

```js
(function(){
    Array.prototype.push.call(arguments, 'lufei');
    console.log(arguments);  // ['namei', 'namei2', 'lufei']
})('namei', 'namei2');
```

* e. 合并数组

```js
let arr1 = [1,2,3];
let arr2 = [4,5,6];

Array.prototype.push.apply(arr1,arr2); 
// 将arr2 合并到了arr1中
```

* f. 求最大数组

```js
Math.max.apply(null,arr)
```

* g. 判断字符类型

```js
Object.prototype.toString.call({})
// [object Object]
```

## V. JS常见的四种设计模式

### 5.1 工厂模式

简单的工厂模式可以理解为解决多个相似的问题。

```js
function CreatePerson(name, age, sex){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function(){
        return this.name;
    }
    return obj;
}

var p1 = new CreatePerson('Tom','28','MALE');
var p2 = new CreatePerson('Lisa','18','FEMALE');

console.log(p1.name); // Tom
console.log(p1.age);  // 28
console.log(p1.sex);  // MALE
console.log(p1.sayName()); // Tom

console.log(p2.name);  // Lisa
console.log(p2.age);   // 18
console.log(p2.sex);   // FEMALE
console.log(p2.sayName()); // Lisa
```

### 5.2 发布-订阅模式

比如我们关注了某一个公众号，然后他对应的有新的消息就会给你推送。

```js
var shoeObj = {};
shoeObj.list = [];

shoeObj.listen = function(fn){
    shoeObj.list.push(fn);
}

shoeObj.trigger = function (){
    for(var i=0, fn; fn = this.list[i++];){
        fn.apply(this, auguments);
    }
}


```