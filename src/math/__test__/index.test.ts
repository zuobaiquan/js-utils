import { divide, fixed, minus, multiply, plus,dp } from '..'

describe('math', () => {
  it('测试math ', () => {
    expect(plus(0.1, 0.2)).toBe(0.3)
    expect(plus(null, 0.2)).toBe(0.2)
    expect(plus('', '')).toBe(0)
    expect(plus('0.1', '0.21')).toBe(0.31)
    expect(minus(0.3, 0.1)).toBe(0.2)
    expect(minus(1, 0.1)).toBe(0.9)
    expect(minus('', '')).toBe(0)
    expect(multiply(0, 10)).toBe(0)
    expect(multiply(1.219, 10)).toBe(12.19)
    expect(multiply('1.219', 10)).toBe(12.19)
    expect(multiply(4246.77, 100)).toBe(424677)
    expect(multiply(1.219, '')).toBe(0)
    expect(divide(10, 3)).toBe(3.33)
    expect(divide(10, 5)).toBe(2)
    expect(divide('10', 5)).toBe(2)
    expect(divide(0.0023, 0.00001)).toBe(230)
    expect(divide('0.0023', '0.00001')).toBe(230)
    expect(divide(0.0023, 0)).toBe(0)
    expect(divide(0, 0)).toBe(0)
    expect(fixed(2.255)).toBe('2.26')
    expect(fixed(2.1)).toBe('2.10')
    expect(fixed(0)).toBe('0.00')
    expect(divide(multiply(20, 2), 3)).toBe(13.33)
    expect(dp(0.005)).toBe(0)
    expect(dp(0.3)).toBe(0.3)
    expect(dp(0)).toBe(0)
  })
})
