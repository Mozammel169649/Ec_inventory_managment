import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve("./react_app/author/manager/index.jsx"),
        }
    },
    publicDir: false,
    build: {
        outDir: './public/assets/reactJs/manager',
        manifest: false,
        sourcemap: true,
        rollupOptions: {
            input: resolve(__dirname, './react_app/author/manager/index.jsx'),
            output: {
                entryFileNames: 'react-manager-dashboard.js',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /react_app\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /react_app\/.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },
    define: {
        // _global: ({}),
        // process: {
        //     env: {},
        // }
    },
})