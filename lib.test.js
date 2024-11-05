const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime (3) should be true", () => {
    expect(lib.prime(3)).toBe(true);
});

test("prime (2) should be false", () => {
    expect(lib.prime(2)).toBe(false);
});

test("prime (24) should be false", () => {
    expect(lib.prime(24)).toBe(false);
});


test("prime (37) should be true", () => {
    expect(lib.prime(37)).toBe(true);
});

test("fatorial (3) should be 6", () => {
    expect(lib.factorial(3)).toBe(6);
});

test("fatorial (10) should be 3628800", () => {
    expect(lib.factorial(10)).toBe(3628800);
});

test("fatorial (16) should be -1", () => {
    expect(lib.factorial(16)).toBe(-1);
});