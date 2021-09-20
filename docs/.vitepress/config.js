/*
 * @Description: Vitepress 主入口配置文件
 * @Author: Pony
 * @Date: 2021-09-20 22:08:03
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-21 00:21:05
 * @FilePath: /demo01/docs/.vitepress/config.js
 */
module.exports = {
    lang: 'zh-ch',
    title: '🦄️ Pony Design',
    description: 'Share you different Javascript skills',
    base: '/',

    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
        ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/180.png' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
    ],
    themeConfig: {
        docsDir: 'docs',
        repo: 'Pony/code-review',
        repoLabel: '🦄️ Pony bring you new programmable World',
        docsBranch: 'main',
        editLinks: true,
        
    }
}