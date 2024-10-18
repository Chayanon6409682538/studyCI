const {add, subtract, multiply,} = require('../math');
describe('simple arithmetic', () => {
    test('addition 5 + 3 to equal 8', () => {
    expect(add(5,3)).toBe(8);
    });
    
    test('subtracts 5 - 1 to equal 4', () => {
    expect(subtract(5,1)).toBe(4);
    });

    test('multiply 2 * 3 to equal 3', () => {
    expect(multiply(2,3)).toBe(6);
    });
    });
