
// This function counts the coins
export const Counter = (inputAmount, remainingAmount, quarters, dimes, nickels) => {

  // is it a number?
  if (isNaN(inputAmount)) {
    return "Return only numbers greater than 0.00!";
  }

  // Does remainingAmount have value?
  else if (remainingAmount === undefined) {
    return Counter(inputAmount, inputAmount, 0, 0, 0);
  }

  // Counting the Coins
  else if (remainingAmount >= .25) {
    const RemainderAfterQuarters = remainingAmount % .25;  // .35-.25 = .1
    const quarterCount = (remainingAmount - RemainderAfterQuarters) / .25; // .35-.1 = .25/.25 = 1
    return Counter(inputAmount, RemainderAfterQuarters, quarterCount, 0, 0);
  }                // .1,  1, 0, 0
  else if (remainingAmount >= .10) {
    const RemainderAfterDimes = remainingAmount % .10;
    const dimeCount = (remainingAmount - RemainderAfterDimes) / .10;
    return Counter(inputAmount, RemainderAfterDimes, quarters, dimeCount, 0);
  }
  else if (remainingAmount >= .05) {
    const RemainderAfterNickels = remainingAmount % .05;
    const nickelCount = (remainingAmount - RemainderAfterNickels) / .05;
    return Counter(inputAmount, RemainderAfterNickels, quarters, dimes, nickelCount);
  }
  else {
    console.log(`This amount of ${inputAmount} is broken up into ${quarters} quarters, ${dimes} dimes, ${nickels} nickels.`);
  }
  // return printToDOM(quarterCount)(dimeCount)(nickelCount)(pennyCount);
  // console.log(quarterCount);
  // console.log(dimeCount);
  // console.log(nickelCount);
  // console.log(pennyCount);
}


Counter(4.99);