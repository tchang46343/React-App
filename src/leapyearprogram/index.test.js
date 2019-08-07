//import leapYear from "./index";

// it("should NOT be a leap year if divisible by 100, not 400", () => {
//   const input = 1900;
//   const expectedOutput = false;
//   expect(leapyear(input)).toBe(expectedOutput);
// });

// it("should be a leap year if divisible by 4, not 100", () => {
//   const input = 1984;
//   const expectedOutput = true;
//   const actualOutput = leapyear(input);
//   expect(actualOutput).toBe(expectedOutput);
// });

const leapYear = require("./index");

it("should NOT be a leap year if divisible by 100, not 400", () => {
  expect(leapYear(1900)).toBe(false);
});

it("should be a leap year if divisible by 4, not 100", () => {
  expect(leapYear(1984)).toBe(true);
});

it("should NOT be a leap year if divisible by 4", () => {
  expect(leapYear(1983)).toBe(false);
});

it("should be a leap year if divisible by 400", () => {
  expect(leapYear(2000)).toBe(false);
});

it("should thow an error for years before 1582", () => {
  expect(() => {
    leapyear(1568);
  }).toThrow();
});
