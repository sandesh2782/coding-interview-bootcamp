const palindrome = require("./index");

describe("Reverse a string", () => {
  let str1 = "level";
  let str2 = "ashes";

  test(`using solution 1 with string '${str1}'`, () => {
    expect(palindrome.palindrome1(str1)).toBe(true);
  });

  test(`using solution 2 with string '${str1}'`, () => {
    expect(palindrome.palindrome2(str1)).toBe(true);
  });

  test(`using solution 1 with string '${str2}'`, () => {
    expect(palindrome.palindrome1(str2)).toBe(false);
  });
});
