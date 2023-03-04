const twoSum = require("./index");

test("twoSum([2,7,11,15], 9) returns [0,1]", () => {
  expect(twoSum([2, 7, 11, 15], 9).sort((a, b) => (a < b ? -1 : 1))).toEqual([
    0,
    1
  ]);
});


