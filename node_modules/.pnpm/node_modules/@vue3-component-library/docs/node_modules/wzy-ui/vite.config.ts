import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ['src/**/*.ts', 'src/**/*.vue'],
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true
        })
    ],
    build: {
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Vue3ComponentLibrary',
            fileName: (format) => `index.${format === 'es' ? 'es' : 'umd'}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue', 'highlight.js'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'highlight.js': 'hljs'
                },
                assetFileNames: 'style.css'
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
}) 