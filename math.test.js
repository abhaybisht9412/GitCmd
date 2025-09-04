const { add, sub, subtract } = require("./math");

test("add correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("sub correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});
