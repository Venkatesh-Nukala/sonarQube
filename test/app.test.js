const greet = require('../src/app');

test('returns guest when no name', () => {
  expect(greet()).toBe("Hello Guest");
});

test('returns name when provided', () => {
  expect(greet("Venkat")).toBe("Hello Venkat");
});
