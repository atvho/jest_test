const {sum, nativeNull} = require('./intro')

describe ('Sum function tests:', () => {
    test('should return two values', () => {
        expect(sum(2, 3)).toBe(5)
    })
    test('should return greater value', () => {
        expect(sum(2, 6)).toBeGreaterThan(4)
    })
    test('should return less value', () => {
        expect(sum(2, 8)).toBeLessThan(15)
    })
    test('should return equal vaulue', () => {
        expect(sum(2, 5)).toEqual(7)
    })
})

describe ('Native null function tests:', () => {
    test('should return null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBe(null)
    })
})