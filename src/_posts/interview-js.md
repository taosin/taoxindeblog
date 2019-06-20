---
title: 前端JS面试必须知道的几个点
date: 2018-05-17
tags: 
    - JavaScript
    - 前端面试

category: 关于技术
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
