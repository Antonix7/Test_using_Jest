const descendingOrder = require("./DescendingOrder");
test("Should work for basic test", () =>{
    expect(descendingOrder(9895815)).toBe(9988551);
})