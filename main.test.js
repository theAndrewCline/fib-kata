const fib = require('./main')

describe('fib', () => {
  it('should return 0 when given 0', () => {
    expect(fib(0)).toEqual(0)
  })

  it.skip('should return 1 when given 1', () => {
    expect(fib(1)).toEqual(1)
  })

  it.skip('should return 5 when given 5', () => {
    expect(fib(5)).toEqual(5)
  })

  it.skip('should return 21 when given 8', () => {
    expect(fib(8)).toEqual(21)
  })

  it.skip('should return 144 when given 12', () => {
    expect(fib(12)).toEqual(144)
  })

  it.skip('should throw an error given a negative number', () => {
    expect(fib(-10)).toThrow()
  })
})
