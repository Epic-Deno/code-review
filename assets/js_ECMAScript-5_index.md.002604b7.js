import{_ as n,c as s,a,b as t,o as p}from"./app.0ef4186b.js";const o='{"title":"ECMAScript 5 有关的的知识点","description":"","frontmatter":{},"headers":[{"level":2,"title":"目录","slug":"目录"},{"level":2,"title":"this的指向问题","slug":"this的指向问题"}],"relativePath":"js/ECMAScript-5/index.md","lastUpdated":1632584937793}',e={},c=t('<h1 id="ecmascript-5-有关的的知识点" tabindex="-1">ECMAScript 5 有关的的知识点 <a class="header-anchor" href="#ecmascript-5-有关的的知识点" aria-hidden="true">#</a></h1><p><em>A mostly reasonable JavaScript</em></p><blockquote><p><strong>Note</strong>: 此篇文章是我总结各种博主的博客文档集合而成的知识点，文章内容会持续更新中， 如果没更细就是在学习<a href="https://www.baidu.com/link?url=6nVJgSfGz6Tyv09u9CZFmLQLxRJaP7JTXC1iOgnaWH0AXuprMaUt5Z0UliWcGeD8&amp;wd=&amp;eqid=d61f2ae5000644ab00000004614f44d7" target="_blank" rel="noopener noreferrer">Python</a>😄 。</p></blockquote><p><a href="https://www.w3school.com.cn/js/js_es5.asp" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/ECMAScript-5-brightgreen" alt="ECMAScript 5"></a></p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><ol><li><a href="#this%E7%9A%84%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98">this的指向问题</a></li></ol><h2 id="this的指向问题" tabindex="-1">this的指向问题 <a class="header-anchor" href="#this的指向问题" aria-hidden="true">#</a></h2><p><a name="1.1"></a><a name="this--direction"></a></p><ul><li><p><a href="#this--direction">1.1</a> <strong>this的指向</strong> ：最复杂的机制之一，自动定义在所有函数的作中, 其实 this 的指向，始终坚持一个原理：<strong>this 永远指向最后调用它的那个对象</strong>, 这句话就是就是this的核心</p><ul><li><code>this</code></li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Pony&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Andy&quot;</span><span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pony</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;inner:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// inner: Window</span>\n<span class="token punctuation">}</span>\n<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Outer:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Outer: window</span>\n</code></pre></div><ul><li>在ES5中<strong>var全局声明的变量会被挂载到全局变量<code>window</code>中</strong>，依据这句话**“this 永远指向最后调用它的那个对象”**，我们分析下最后调用<code>a</code>的地方是<code>a()</code>, 前面没有调用的对象那么就是全局对象window，就等同于<code>window.a()</code>；注意，如果我们使用了严格模式，全局对象就会变成<code>undefined</code>，就会报错<code>Uncaught TypeError: Cannot read property &#39;name&#39; of undefined</code>。</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Pony&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Cheney&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cheney</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\na<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre></div><ul><li>函数fn是对象a调用的，所以打印的时候就是a中的name值。</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Pony&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Cheney&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cheney</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nwindow<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>这里是window对象调用a对象，a对象调用函数fn， fn最终是被a调用的，如果a中没有name属性就会输出undefined。</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Pony&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pony</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> f <span class="token operator">=</span> a<span class="token punctuation">.</span>fn\n<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li><p>这里是把对象a中的函数方法直接赋值给了f，f()在执行的时候就相当于window.f(), this.name的this就是window，window.name就是Pony, 最后控制台就会输出Pony，这里例子调用者是window，this就是window。</p></li><li><p>由以上四个例子我们可以看出，this 的指向并不是在创建的时候就可以确定的，在 es5 中，永远是this <strong>永远指向最后调用它的那个对象</strong>。</p></li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Pony&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Cheney&#39;</span><span class="token punctuation">;</span>\n    <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pony</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><ul><li>最后一个例子 fn()函数是被window调用的，fn里面虽然有定义了变量name但是只是一个声明，window全局变量中的name始终是Pony，因而最后打印的也是Pony。</li></ul></li></ul><p><strong><a href="#%E7%9B%AE%E5%BD%95">⬆ 回到顶部</a></strong></p>',10);var u=n(e,[["render",function(n,t,o,e,u,i){return p(),s("div",null,[a("\n * @Description: Es5有关的知识点\n * @Author: Pony\n * @Date: 2021-09-25 22:17:16\n * @LastEditors: Pony\n * @LastEditTime: 2021-09-25 23:48:57\n * @FilePath: /demo01/docs/js/ECMAScript-5/index.md\n"),c])}]]);export{o as __pageData,u as default};
