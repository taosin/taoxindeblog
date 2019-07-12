---
title: 2019-fe-interview
date: 2019-07-12 17:42:44
category: 个人提升
tags: 
	-: 面试
vssue-title: 2019-fe-interview
---

## JavaScript 部分

1. js 的基本数据类型

`Undefined`、`Null`、`Boolean`、`Number`、`String`。另外ES6 新增：`Symbol`，为创建后独一无二不可变的数据类型
2. JavaScript 原型和原型链是什么？有什么特点？

每个对象都会在其内部初始化一个属性，即 `prototype`，当我们访问一个对象的属性时，如果这个对象内部没有这个属性，那它就会去 `prototype` 里面去找，如果找不到，就会在这个`prototype` 的 `prototype` 中去找，直到找他该属性或者 `prototype` 为 `null` 时便会停止。

一直找下去的过程，就是原型链的概念。

```js
var obj = {}
console.log(obj.constructor.prototype === instance.__proto__)
// true
```
