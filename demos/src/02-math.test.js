const { sum, multiply, divide } = require('./02-math');

describe('Test for math', () => {

  describe('Test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Test for multiply', () => {
    test('multiply 2 * 2 should be 4', () => {
      const rta = multiply(2, 2);
      expect(rta).toBe(4);
    });
  });

  describe('Test for divide', () => {

    test("should divide", () =>{
      const rta = divide(2, 2);
      expect(rta).toBe(1);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test("should divide for zero", () =>{
      const rta = divide(6, 0);
      expect(rta).toBe(null);
      const rta2 = divide(5, 0);
      expect(rta2).toBe(null);
    });
  });
});
