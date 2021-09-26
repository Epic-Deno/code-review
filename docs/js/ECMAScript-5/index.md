<!--
 * @Description: Es5有关的知识点
 * @Author: Pony
 * @Date: 2021-09-25 22:17:16
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-26 23:54:28
 * @FilePath: /demo01/docs/js/ECMAScript-5/index.md
-->
# ECMAScript 5 有关的的知识点

*A mostly reasonable JavaScript*

> **Note**: 此篇文章是我总结各种博主的博客文档集合而成的知识点，文章内容会持续更新中， 如果没更细就是在学习[Python](https://www.baidu.com/link?url=6nVJgSfGz6Tyv09u9CZFmLQLxRJaP7JTXC1iOgnaWH0AXuprMaUt5Z0UliWcGeD8&wd=&eqid=d61f2ae5000644ab00000004614f44d7)😄 。

[![ECMAScript 5](https://img.shields.io/badge/ECMAScript-5-brightgreen)](https://www.w3school.com.cn/js/js_es5.asp)

## 目录

  1. [this的指向问题](#this的指向问题)
  2. [箭头头函数](#箭头函数)









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

## 箭头函数
  <a name="2.1"></a>
  <a name="Arrow--function"></a>
  
  - [1.1](#Arrow--function) **箭头函数** ： **箭头函数的this始终指向函数定义时候的this，不是执行时候**，箭头函数中是没有this的绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含， 则this绑定的是最近一层非箭头函数的this， 否则this就是undefined。

    ```javascript
    var name = 'Pony';

    var a = {
        name: "Cheney",

        func1: function () {
            console.log(this.name); // Cheney 
        },

        func2: function () {
            setTimeout(() => {
                this.func1()
            }, 100)
        }
    }

    a.func2() // Cheney
    ```
    + 这个例子当中调用了对象a重的函数func2, func2是一个常规非箭头函数，里面的定时器是一个箭头函数里面this会指向最近的非箭头函数func2的this, func2是a的一个属性，所以他的this指向的是就是a,this.func1就等同于a.func1, func1也是a对象的属性函数，func1的`this.name`就等同于`a.name` 所以打印出了Cheney。



**[⬆ 回到顶部](#目录)**