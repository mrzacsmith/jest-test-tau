test("there is pool in liverpool", () => {
  expect("Liverpool").toMatch(/pool/); // Pass
  expect("Liverpool").toMatch(/pol/); //fail
  expect("Liverpool").not.toMatch(/pol/); //pass
});
