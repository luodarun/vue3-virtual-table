import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';
import glob from 'fast-glob';

const pkgRoot = path.resolve(__dirname, 'src');

// const excludeFiles = (files: string[]) => {
//     const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
//     return files.filter(
//         (path) => !excludes.some((exclude) => path.includes(exclude))
//     )
// }

// async function getEntry() {
//     const input = excludeFiles(
//         await glob('**/*.{js,ts,vue}', {
//             cwd: pkgRoot,
//             absolute: true,
//             onlyFiles: true,
//         })
//     )
//     return input;
// }

// https://vitejs.dev/config/
export default defineConfig(async () => {
    return {
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: path.resolve(__dirname, 'src'),
                },
            ],
        },
        plugins: [vue(), DefineOptions(), VueJsx()],
        server: {
            open: true,
            port: 10010,
            host: true,
        },
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: path.resolve(__dirname, 'src/entry.ts'),
                name: 'Vue3Popper', // 暴露的全局变量
            },
            copyPublicDir: false,
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
    };
});
