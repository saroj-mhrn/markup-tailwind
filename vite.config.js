import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import posthtml from 'posthtml'
import posthtmlExtend from 'posthtml-extend'
import posthtmlInclude from 'posthtml-include'

function posthtmlPlugin() {
    return {
        name: 'posthtml',
        transformIndexHtml: {
            order: 'pre',
            async handler(html) {
                const result = await posthtml([
                    posthtmlExtend({ root: './src/layouts' }),
                    posthtmlInclude({ root: './src/partials' }),
                ]).process(html)
                return result.html
            },
        },
        handleHotUpdate({ file, server }) {
            if (file.endsWith('.html')) {
                server.ws.send({ type: 'full-reload' })
            }
        },
    }
}

export default defineConfig({
    root: 'src',
    plugins: [
        tailwindcss(),
        posthtmlPlugin(),
    ],
    server: {
        open: true,
    },
    build: {
        outDir: '../dist',
    },
})
