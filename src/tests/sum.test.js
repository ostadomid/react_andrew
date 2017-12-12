const sum = (a, b) => { 
    return new Promise((res, rej) => { 
        setTimeout(() => { res(a + b); }, 1500);
    });
};

describe('Object Test', () => { 

    test('Equality', () => {
        let p = { name: 'Bob', age: 20 };
        expect(p).toEqual({
            name: 'Bob',
            age: expect.any(Number)
        });
    });

});
describe('Sum ', () => { 
    test(`Sum 1  2  = 3 `,  () => {
        return expect(sum(1, 2)).resolves.toBe(3);    
     });
});
