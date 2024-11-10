import dotenv from 'dotenv'
import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

dotenv.config()
dotenv.config({ path: '.env.local', override: true })

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'html', 'text'],
      //reporter: ['lcov', 'json'],
      lines: 50,
      functions: 50,
      branches: 50,
      statements: 50,
      exclude: [
        ...configDefaults.exclude,
        '**/*.{mjs,cjs}',
        '**/dist/**',
        '**/__test__/**',
        '**/node_modules/**'
      ],
      include: ['src/**/*.{ts,js}'],
      all: true
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@/',
        replacement: path.resolve(__dirname, 'src/')
      }
    ]
  }
})
