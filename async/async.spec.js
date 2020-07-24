const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax echo:', () => {
    
    test('should return async value', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })
    
    test('should catch async error', async () => {
        try {
            await Ajax.echo()            
        } catch (e) {
            expect(e.message).toBe('error bla')
        }
    })
})

describe('Ajax GET:', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]
        response = {
            data: {
                todos
            }
        }
    })

    test('should return data drom backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})