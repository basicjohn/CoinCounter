
export default Counter;



  // This function counts the coins
  const Counter = (amount) => {
    if (isNaN(amount) || amount === 0 ) {
      return "Return only numbers greater than 0.00!";
    }
    else if (amount >= .25) {
      const RemainderAfterQuarters = amount % .25;
      const quarterCount = (amount - RemainderAfterQuarters) / .25;
      return Counter(RemainderAfterQuarters);
    }
    else if (amount >= .10) {
       const RemainderAfterDimes = amount % .10;
      const dimeCount = (amount - RemainderAfterDimes) / .10;
      return Counter(RemainderAfterDimes);
    }
    else if (amount >= .05) {
      const RemainderAfterNickels = amount % .05;
      const nickelCount = (amount - RemainderAfterNickels) / .05;
      return Counter(RemainderAfterNickels);
    }
    else (amount >= .01) {
      const pennyCount = amount;
      return printToDOM(quarterCount)(dimeCount)(nickelCount)(pennyCount);
    }
  }


  // This function reads the coin count to the DOM
 

