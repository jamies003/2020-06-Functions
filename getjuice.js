function getjuice (money, costPerBottles) { 

  console.log("buy " + calCans(money, costPerBottles) + " bottles of can");
      return calChange(money, costPerBottles)
  
      let numerOfCans = Math.floor(money / costPerBottles);
  
  //     console.log("buy" + numberOfCans + "bottles of juice");
  //     console.log("buy " + calCans(money, 1.5) + "bottles of juice");
  
      return calChange(money, costPerBottles);
  }
  
  function calCans (startingMoney, costPerBottles) {
  
      let numberOfCans = Math.floor(startingMoney / costPerBottles);
      return numberOfCans;
  
  }
  
  function calChange (startingAmount, costPerBottles) {
  
      let change = startingAmount % costPerBottles;
      return change;
  }
  
  console.log("Your juice is availabe " + getjuice(7, 2) + " dollar change");