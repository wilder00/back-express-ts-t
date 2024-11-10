import { getValueIfNotNullish, getValueIfTruthy } from '@/utils/nullish'

describe('Nullish functions', () => {
  it('getValueIfNotNullish: get value NaN when value into a Number() is undefined', () => {
    const value = undefined
    const auxValue = 3000
    const result = getValueIfNotNullish(Number(value), auxValue)
    expect(result).toBe(NaN)
  })

  it('getValueIfNotNullish: should get auxValue when value is undefined', () => {
    const value = undefined
    const auxValue = 3000
    const output = getValueIfNotNullish(value, auxValue)
    expect(output).toBe(auxValue)
  })

  it('getValueIfTruthy: get value auxValue when value into a Number() is undefined', () => {
    const value = undefined
    const auxValue = 3000
    const output = getValueIfTruthy(Number(value), auxValue)
    expect(output).toBe(auxValue)
  })

  it('getValueIfTruthy: should get auxValue when value is undefined', () => {
    const value = undefined
    const auxValue = 3000
    const output = getValueIfTruthy(value, auxValue)
    expect(output).toBe(auxValue)
  })

  it('getValueIfTruthy: should get auxValue when value is empty string', () => {
    const value = ''
    const auxValue = 'auxValue'
    const output = getValueIfTruthy(value, auxValue)
    expect(output).toBe(auxValue)
  })

  it('getValueIfTruthy: should get VALUE when value is a truthy value', () => {
    const VALUE = 3000
    const auxValue = 5000
    const output = getValueIfTruthy(VALUE, auxValue)
    expect(output).toBe(VALUE)
  })
})
