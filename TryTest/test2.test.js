//test
const space_count = require('./test2');
test('se contara la cantidad de espacios', () => {
    expect(space_count("Este texto contiene cuatro espacios")).toBe(4);
  });