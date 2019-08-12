const reverse = require("./index");

describe("Reverse a string", () => {
  let str = "";
  let reversedStr = "";

  beforeEach(() => {
    str = "ashes";
    reversedStr = "sehsa";
  });

  test("using solution 1", () => {
    expect(reverse.reverse1(str)).toBe(reversedStr);
  });

  test("using solution 2", () => {
    expect(reverse.reverse2(str)).toBe(reversedStr);
  });

  test("using solution 3", () => {
    expect(reverse.reverse3(str)).toBe(reversedStr);
  });
});
