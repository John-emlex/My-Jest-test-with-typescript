let buyer = ['milk', 'chocolate', 'cake', 'diapers'];

// 


afterEach(() => {
    console.log('after each');
    buyer = ['milk', 'chocolate', 'cake', 'diapers'];
})

// beforeAll(() => {
//     console.log('before all');
//     buyer = ['milk', 'chocolate', 'cake', 'diapers'];
// })

// afterAll(() => {
//     console.log('after all');
//     buyer = ['milk', 'chocolate', 'cake', 'diapers'];
// })

describe('Buyer array',() => {
    it('add animal aat the end of the array', () => {
        buyer.push('drink');
        expect(buyer[buyer.length - 1]).toBe('drink');
    })
    test('add cake at the end of the array', () => {
        buyer.push('cake');
        expect(buyer[buyer.length - 1]).toBe('cake');
    })
    test('should have a length of 4', () => {

    expect(buyer.length).toBe(4);
    
    })
})


describe('Testing Truthy', () => {
    it('test.true', () => {
        expect(true).toBeTruthy();
    
    })
})