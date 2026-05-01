const greet = require('../app');

test('should return guest when null', () => {
    expect(greet(null)).toBe("Hello Guest");
});

test('should return name when provided', () => {
    expect(greet("Venkat")).toBe("Hello Venkat");
});
