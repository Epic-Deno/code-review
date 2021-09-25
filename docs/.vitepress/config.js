/*
 * @Description: Vitepress 主入口配置文件
 * @Author: Pony
 * @Date: 2021-09-20 22:08:03
 * @LastEditors: Pony
 * @LastEditTime: 2021-09-25 22:05:36
 * @FilePath: /demo01/docs/.vitepress/config.js
 */
module.exports = {
    lang: 'zh-ch',
    title: '🦄️ Pony Design',
    description: 'Share you different Javascript skills',
    base: '/code-review',

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
        repo: 'Epic-Deno/code-review',
        repoLabel: 'Star 🌟 🦄️ Pony',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',

        nav: [
            { text: 'DailyReview', link: '/home/main/', activeMatch: '^/home/' },
            { text: 'Javascript'},
            { text: 'FrameWorks'},
            { text: 'Python'},
        ],

        sidebar: {
            '/home/': getHome(),
        }
    }
}

function getHome() {
    return [
        { text: 'Main', link: '/home/main/' },
        {
            text: 'DailyReview',
            // collapsable: true,
            children: [
                { 
                    text: '前端规范',
                    link: '/home/font-endSpecification/airbnb/zh-ch/',
                    children: [
                        { text: '爱彼迎前端规范-EN', link: '/home/font-endSpecification/airbnb/' },
                        { text: '爱彼迎前端规范-CH', link: '/home/font-endSpecification/airbnb/zh-ch/' }
                    ] 
                }
            ]
        }
    ]
}