import { sum } from '@/utils/sum'
import { describe, expect, test } from 'vitest'

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3) // 3  + 3 = 6 )
  })
})
