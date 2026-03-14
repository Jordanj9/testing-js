const Person = require('./06-person')

describe('Person', () => {

  let person = null;
  beforeEach(() => {
    person = new Person('John', 70, 1.75);
  });


  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
})
