
    




  // This function counts the coins
  const Counter = (amount) => {
    if (isNaN(amount) || amount === 0 ) {
      return "Return only numbers greater than 0.00!";
    }
    else if (amount >= 25) {
      const RemainderAfterQuarters = amount % .25;
      const quarterCount = (amount - RemainderAfterQuarters) / .25;
      return Counter(RemainderAfterQuarters);
    }
    else if (amount >= 10) {
      const dimeCount = amount % 10;
      const RemainderAfterDime = amount - (10 * dimeCount) 
      return Counter(RemainderAfterDimes);
    }
    else if (amount >= 5) {
      const nickelCount = amount % 5;
      const RemainderAfterNickel = amount - (5 * nickelCount)
      return Counter(RemainderAfterNickel);
    }
    else (amount >= 1) {
      const pennyCount = amount;
      return Counter(RemainderAfterNickel);;
    }
  }


  // This function reads the coin count to the DOM


