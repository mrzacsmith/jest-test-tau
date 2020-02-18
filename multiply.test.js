const multiply = require("./multiply");

describe("testing positive numbers", () => {
  test("3*2 toBe 6", () => {
    expect(multiply(3, 2)).toBe(6);
  });
  test("3*4 toBe 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });
  test("3*0 toBe 0", () => {
    expect(multiply(3, 0)).toBe(0);
  });
  test("0*5 toBe 0", () => {
    expect(multiply(0, 5)).toBe(0);
  });
  test("-3*4 toBe -12", () => {
    expect(multiply(-3, 4)).toBe(-12);
  });
  test("5*-3 toBe -15", () => {
    expect(multiply(5, -3)).toBe(-15);
  });
  test("-4*-4 toBe 16", () => {
    expect(multiply(-4, -4)).toBe(16);
  });
});

// toBe tests for values and is strict equality

// toEqual tests value of an object
