/* eslint-disable no-undef */
import { Counter } from "./../src/js/coin-counter.js";

describe("Counter", () => {
  test("Run Counter function and return string", () => {
    let CounterReturn = Counter("test");
    let outputString = "Return only numbers greater than 0.00!";
    expect(CounterReturn).toMatch(outputString);
  });
  test("Check to see if the inputAmount is populating remainingAmount ", () => {
    let inputAmount = 0.01;
    let outputString = Counter(inputAmount);
    expect(outputString).toMatch("This amount of 0.01 is broken up into 0 quarters, 0 dimes, 0 nickels and 1 cents.");
  });
});