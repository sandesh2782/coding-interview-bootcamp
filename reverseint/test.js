const reverseInt = require("./index");

describe("Reverse an integer", () => {
  let int1 = 51;
  let int2 = -67800;

  test(`using solution 1 with integer '${int1}'`, () => {
    expect(reverseInt(int1)).toBe(15);
  });

  test(`using solution 1 with integer '${int2}'`, () => {
    expect(reverseInt(int2)).toBe(-876);
  });
});
