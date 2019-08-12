const reverse = require("./index");

describe("Reverse a string", () => {
  let str = "ashes";
  let reversedStr = "sehsa";

  test(`using solution 1 with string '${str}' and reversed string '${reversedStr}'`, () => {
    expect(reverse.reverse1(str)).toBe(reversedStr);
  });

  test(`using solution 2 with string '${str}' and reversed string '${reversedStr}'`, () => {
    expect(reverse.reverse2(str)).toBe(reversedStr);
  });

  test(`using solution 3 with string '${str}' and reversed string '${reversedStr}'`, () => {
    expect(reverse.reverse3(str)).toBe(reversedStr);
  });
});
