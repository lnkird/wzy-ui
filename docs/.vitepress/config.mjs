import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'wzy-ui',
    description: 'A modern Vue 3 component library',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Components', link: '/components/' },
            { text: 'GitHub', link: 'https://github.com/yourusername/wzy-ui' }
        ],
        sidebar: {
            '/components/': [
                {
                    text: 'Basic',
                    items: [
                        { text: 'Button', link: '/components/button' },
                        { text: 'Input', link: '/components/input' }
                    ]
                },
                {
                    text: 'Feedback',
                    items: [
                        { text: 'Message', link: '/components/message' },
                        { text: 'Dialog', link: '/components/dialog' }
                    ]
                },
                {
                    text: 'Data Display',
                    items: [
                        { text: 'Tree', link: '/components/tree' },
                        { text: 'Select', link: '/components/select' }
                    ]
                },
                {
                    text: 'Other',
                    items: [
                        { text: 'Preview', link: '/components/preview' }
                    ]
                }
            ]
        }
    },
    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    }
}) 