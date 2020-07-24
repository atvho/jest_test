const Lodash = require('./sync')

describe('Lodash compact:', () => {

    let array 
    const _ = new Lodash()

    beforeEach(() => {
        array = [false, 42, 0, '', null, 'some text', true]
    })
    
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should delete falsy values', () => {
        const result = [42, 'some text', true]
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(undefined)
        expect(_.compact(array)).not.toContain('')
    })
})