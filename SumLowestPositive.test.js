const sumTwoSmallestNumbers = require("./SumLowestPositive");
test("Should work for basic test", () =>{
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13, "Sum should be 13");
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6, "Sum should be 6");
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10, "Sum should be 10");
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24, "Sum should be 24");
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16, "Sum should be 16");
})