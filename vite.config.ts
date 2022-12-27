import solid from 'solid-start/vite'
import { defineConfig } from 'vitest/config'
import { MasterCSSVitePlugin } from '@master/css.vite'

export default defineConfig({
  plugins: [MasterCSSVitePlugin(), solid({ ssr: false })],
  test: {
    deps: {
      registerNodeLoader: true
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect'],
    transformMode: { web: [/\.[jt]sx?$/] }
  }
})
