
const { add } = require('./stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return 1 for input "1"', () => {
        expect(add("1")).toBe(1);
    });

    test('should return 6 for input "1,5"', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should handle new lines', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle custom delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    test('should throw error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
    });
});
