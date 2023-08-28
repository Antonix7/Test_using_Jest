// Test...

// haciendo "import" de la funcion descendingOrder()
const descendingOrder = require("./DescendingOrder"); // require recibe como parametro el directorio
test("Should work for basic test", () =>{
    // expect() recibe como parametro la funcion y el debido resultado.
    expect(descendingOrder(9895815)).toBe(9988551);
})