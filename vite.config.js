import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                impressum: 'impressum.html',
            },
        },
    },
    plugins: [ViteMinifyPlugin({})],
});
