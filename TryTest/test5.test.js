const filter_list = require("./test5");
test("Basic test", () => {
    expect(filter_list([1, 2, 'abc', 3, 'df', 4])).toStrictEqual([1, 2, 3, 4]);
})