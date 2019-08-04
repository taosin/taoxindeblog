---
title: 关于Vue.js的一些问题总结
date: 2019-07-27
category: 关于技术
tags: 
	- 前端面试
vssue-title: about-vue
---

> **[Vue.js](https://vuejs.org/)** 作为当前最火的前端框架之一，在面试中也对 **Vue.js** 框架的使用熟练度和理解程度的考察也是必要重要的一环。

## 1. 谈谈对 MVVM 框架的理解？

要了解 MVVM 框架，得先从 MVC 框架说起。

MVC框架将软件分为三部分：
* Model：模型，数据保存
* View：视图，用户界面
* Controller: 控制器，业务逻辑

各部分之间的通信模式如下图：

![](http://images.iamtaoxin.com/2019-07-27-mvc.png)

---
MVVM 则是 **Model-View-ViewModel** 的缩写。
* **Model**：数据层，可以在该模型中定义数据修改和操作的业务逻辑。该层仅关注数据本身，不关注其他任何行为。
* **View**：视图层，当 `ViewModel` 层对 `Model` 层的数据进行更新时，就会通过数据绑定更新到 `View` 层。
* **ViewModel**：业务逻辑层，`View`层需要什么数据，`ViewModel` 就会提供这个数据；`View`发生哪些操作，`ViewModel` 就会响应这些操作，可以认为是 `Model For View`。
各部分之间的通信模式如下图：

![](http://images.iamtaoxin.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-04%20%E4%B8%8B%E5%8D%881.41.12.png)

**总结**：通过双向绑定使得 Mode 变化时，ViewModel会自动更新，而 ViewModel变化时，View也会自动更新。该模式简化了界面与业务的逻辑，解决了数据频繁更新。

* 优点：
	1. 分离视图和模型，降低代码耦合度，提高视图或者逻辑的重用性。
	2. 提高可测试性：ViewModel 的存在有利于开发者编写测试代码。
	3. 利用数据双向绑定自动更新dom，免除手动操作DOM。
* 缺点：
	1. 增加了追踪和定位bug的难度。
	2. 当 model 的数据量较大，不利用释放内存。
	3. 对于视图状态较多的应用程序，ViewModel 的构建和维护成本较高。


## 2. 描述下Vue的生命周期

关于 Vue 生命周期的详细描述可翻阅[官方文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)，引用官方周明周期图示如下：

![](https://cn.vuejs.org/images/lifecycle.png)

由上图可得出，vue生命周期大致可以分为八个阶段：创建前/后，载入前/后，更新前/后和销毁前/后。

|阶段| 描述|备注|
|:---|:---|:--|
|beforeCreate|Vue实例的挂载元素 `$el` 和数据对象 `data`都是 `undefined`，此阶段还未初始化。|-|
|Created|此阶段完成了`data`初始化，但`el`还未初始化。| 也可进行异步请求|
|beforeMount|Vue实例的`$el`和 `data` 都已经完成初始化，相关的render函数首次被调用。实例已经完成了编译过程，将 `data`里面的数据和模板生成 html。|*但此时html还没有挂载到页面上*。|
|mounted|`el` 已被新创建的 `vm.$el`替换并挂载到实例上，此时实例完成了如下配置：将编译好的html内容替换`el`属性指向的 DOM对象，完成模板中html渲染到html页面。|一般在该过程中会进行 ajax 交互。|
|beforeUpdate|在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步更改状态，但不会触发附件的重渲染过程。|-|
|updated|在由于数据变更导致虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，可以进行依赖于 DOM 的操作。*在大多数情况下，如果需要更改相应状态，通常会使用计算属性或watcher取而代之。*|该钩子在服务器端渲染期间不被调用。|
|beforeDesotry|在实例销毁之前调用。|在此之前实例仍然可用。|
|destoryed|在实例销毁之后调用，调用后，所有的事件监听器会被移除，子实例也会被销毁。|该钩子在服务器端渲染期间不被调用。|

## 3. Vue组件间如何通信

* `props`: 父组件向子组件传递数据，即自上而下传递；
* `$emit-on`: 子组件向父组件传递数据，即自下而上传递；
* EventBus: 通过 EventBus 进行信息的发布与订阅，可用于兄弟组件之间数据的传递；
* Vuex: 管理全局数据流，也可进行组件间的数据共享；
* `provide/inject`: 祖先组件向其子孙组件传递数据。

## 4. computed 和 watch 的区别？

* Computed:
	1. 计算属性，也就是计算值，它更多应用于计算值的场景；
	2. 可缓存，computed 的值在 getter 执行之后会进入缓存，只有在它的依赖值的属性发生变化之后，下一次获取computed的值时才会重新调用对应的getter来进行计算；
	3. 适用于比较消耗性能的计算场景。
* Watch:
	1. 起到 *观察* 或 *监听* 的作用，当数据发生变化时来执行回调进行后续操作；
	2. 无缓存性，页面重新渲染时监听的值不发生变化也会执行。

## 5. Vue 是如何实现数据双线绑定的

Vue 采用**数据劫持**结合**发布-订阅者模式**的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`和`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。


## 6. Proxy 和 Object.defineProperty 的对比？

在 Vue3.0 中通过 Proxy 对象进行类似的操作。

* Object.defineProperty 存在的问题
	1. 不能监听数组的变化
	2. 必须遍历对象的每个属性
	3. 必须深层遍历嵌套的对象

* Object.defineProperty 的优点：兼容性好，支持IE9
* Proxy 的优点
	1. 可以直接监听对象而非属性
	2. 可以直接监听数组的变化
	3. 拥有 `Object.defineProperty` 不具备的拦截方法，如 apply、ownKeys、deleteProxy、has 等
	4. 返回一个新对象，可以只操作新对象而达到目的，而 `Object.defineProperty` 只能遍历对象属性直接修改

## 7. Vue 中的key有什么作用？

key 可以对 Vue 中的 vnode 进行标记的唯一 id，通过key，diff操作可以更准确、更快速。