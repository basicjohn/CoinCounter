// This function counts the coins
export function Counter(amount) {
  let quarterCount = 0;
  let dimeCount = 0;
  let nickelCount = 0;
  let pennyCount = 0;
  
  if (amount === 0 ) {
    return "Return only numbers greater than 0.00!";
  }
  else if (amount >= .25) {
    const RemainderAfterQuarters = amount % .25;
    quarterCount = (amount - RemainderAfterQuarters) / .25;
    return Counter(RemainderAfterQuarters);
  }
  else if (amount >= .10) {
    const RemainderAfterDimes = amount % .10;
    dimeCount = (amount - RemainderAfterDimes) / .10;
    return Counter(RemainderAfterDimes);
  }
  else if (amount >= .05) {
    const RemainderAfterNickels = amount % .05;
    nickelCount = (amount - RemainderAfterNickels) / .05;
    return Counter(RemainderAfterNickels);
  }
  else {
    pennyCount = amount;
  }
  // return printToDOM(quarterCount)(dimeCount)(nickelCount)(pennyCount);
  console.log(quarterCount);
  console.log(dimeCount);
  console.log(nickelCount);
  console.log(pennyCount);
}

// This function reads the coin count to the DOM
 

// console.log(quarterCount);
// console.log(dimeCount);
// console.log(nickelCount);
// console.log(pennyCount);