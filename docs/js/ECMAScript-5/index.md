<!--
 * @Description: Es5有关的知识点
 * @Author: Pony
 * @Date: 2021-09-25 22:17:16
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-25 23:46:03
 * @FilePath: /demo01/docs/js/ECMAScript-5/index.md
-->
# ECMAScript 5 有关的的知识点

*A mostly reasonable JavaScript*

> **Note**: 此篇文章是我总结各种博主的博客文档集合而成的知识点，文章内容会持续更新中， 如果没更细就是在学习[Python](/python/index/)😄 。

[![ECMAScript 5](https://img.shields.io/badge/ECMAScript-5-brightgreen)](https://www.w3school.com.cn/js/js_es5.asp)

## 目录

  1. [this的指向问题](#this的指向问题)









## this的指向问题
  <a name="1.1"></a>
  <a name="this--direction"></a>
  
  - [1.1](#this--direction) **this的指向** ：最复杂的机制之一，自动定义在所有函数的作中, 其实 this 的指向，始终坚持一个原理：**this 永远指向最后调用它的那个对象**, 这句话就是就是this的核心

    + `this`

    ```javascript
    var name = "Pony";
    function a() {
        var name = "Andy";

        console.log(this.name); // Pony

        console.log("inner:" + this); // inner: Window
    }
    a();
    console.log("Outer:" + this) // Outer: window
    ```
    + 在ES5中**var全局声明的变量会被挂载到全局变量`window`中**，依据这句话**“this 永远指向最后调用它的那个对象”**，我们分析下最后调用`a`的地方是`a()`, 前面没有调用的对象那么就是全局对象window，就等同于`window.a()`；注意，如果我们使用了严格模式，全局对象就会变成`undefined`，就会报错`Uncaught TypeError: Cannot read property 'name' of undefined`。

    ```javascript
    var name = "Pony";
    var a = {
        name: 'Cheney',
        fn: function() {
            console.log(this.name); // Cheney
        }
    }
    a.fn(); 
    ```
    + 函数fn是对象a调用的，所以打印的时候就是a中的name值。
    ```javascript
    var name = "Pony";
    var a = {
        name: 'Cheney',
        fn: function() {
            console.log(this.name); // Cheney
        }
    }
    window.a.fn();
    ```
    + 这里是window对象调用a对象，a对象调用函数fn， fn最终是被a调用的，如果a中没有name属性就会输出undefined。

    ``` javascript
    var name = "Pony";
    var a = {
        name: null,
        fn: function() {
            console.log(this.name); // Pony
        }
    }
    var f = a.fn
    f();
    ```
    + 这里是把对象a中的函数方法直接赋值给了f，f()在执行的时候就相当于window.f(), this.name的this就是window，window.name就是Pony, 最后控制台就会输出Pony，这里例子调用者是window，this就是window。

    + 由以上四个例子我们可以看出，this 的指向并不是在创建的时候就可以确定的，在 es5 中，永远是this **永远指向最后调用它的那个对象**。

    ```javascript
    var name = "Pony";

    function fn() {
        var name = 'Cheney';
        innerFunction();
        function innerFunction() {
            console.log(this.name); // Pony
        }
    }
    fn()
    ```
    + 最后一个例子 fn()函数是被window调用的，fn里面虽然有定义了变量name但是只是一个声明，window全局变量中的name始终是Pony，因而最后打印的也是Pony。

**[⬆ 回到顶部](#目录)**