const {todoService, todoServiceById} = require('./todoService');

//jest.mock('./__mocks__/todoService.js');


describe("Todo Service test", ()=>{
    test("it gets all todos", async  () =>{
        const result = await todoService();
        expect(result.data).toHaveLength(200);
    })

    test('it gets a todo by id', async () =>{
        const result = await todoServiceById(2);
        expect(result.data.userId).toEqual(1);
    })
});