const getGrade = require("./test4");
test("Basic test", () => {
    expect(getGrade(90, 90, 90)).toBe('A');
    expect(getGrade(80, 80, 80)).toBe('B');
})