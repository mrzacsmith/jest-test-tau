test("there is pool in liverpool", () => {
  expect("Liverpool").toMatch(/pool/); // Pass
  // expect("Liverpool").toMatch(/pol/); //fail
  expect("Liverpool").not.toMatch(/pol/); //pass
});

const multiply = require("./multiply.js");

// number matches

describe("test multiply positive senarios", () => {
  test("multiply 3*2 should equal 6", () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(3, 2)).toBeGreaterThan(5);
    expect(multiply(3, 2)).toBeLessThan(7);
    expect(multiply(3, 2)).toBeLessThanOrEqual(6);
  });
});

// testing truthiness
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
