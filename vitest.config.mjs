import dotenv from 'dotenv'
import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

dotenv.config()
dotenv.config({ path: '.env.local', override: true })

export default defineConfig({
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ['lcov', 'json', 'html', 'text'],
      //reporter: ['lcov', 'json'],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
      exclude: ['**/*.{mjs,cjs}'],
      all: true
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
