import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { minify } from 'html-minifier-terser'
import tsconfigPaths from 'vite-tsconfig-paths'

const minifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  minifyJS: true,
}

const viteConfig = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      enforce: 'post',
      name: 'html-minifier',
      transformIndexHtml: (html: string) => {
        return minify(html, minifyOptions)
      },
    },
  ],
})

export default viteConfig
