const determine_space = require("./test3");
test('Se esperan los elementos unidos en un string', () => {
    expect(determine_space(["This", "is", "a","text"])).toBe("This is a text");
})