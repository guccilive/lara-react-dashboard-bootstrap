import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/index.scss',
                'resources/js/index.jsx'
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            // '~bootstrap-js': path.resolve(__dirname, 'node_modules/bootstrap/dict/js/bootstrap.min.js'),
            '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons/font/bootstrap-icons.css'),
            '~remixicon': path.resolve(__dirname, 'node_modules/remixicon/fonts/remixicon.css'),
            // '~fontawesome': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free'),
        }
    }
});