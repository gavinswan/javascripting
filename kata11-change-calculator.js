const calculateChange = function(total, cash) {
  let finalObject = {};
  let cashBack = cash - total;
  if (cashBack / 2000 >= 1) {
    finalObject.twentyDollar = Math.floor(cashBack / 2000);
    cashBack -= finalObject.twentyDollar * 2000;
  } 
  if (cashBack / 1000 >= 1) {
    finalObject.tenDollar = Math.floor(cashBack / 1000);
    cashBack -= finalObject.tenDollar * 1000;
  } 
  if (cashBack / 500 >= 1) {
    finalObject.fiveDollar = Math.floor(cashBack / 500);
    cashBack -= finalObject.fiveDollar * 500;
  }
  if (cashBack / 200 >= 1) {
    finalObject.twoDollar = Math.floor(cashBack / 200);
    cashBack -= finalObject.twoDollar * 200;
  }
  if (cashBack / 100 >= 1) {
    finalObject.oneDollar = Math.floor(cashBack / 100);
    cashBack -= finalObject.oneDollar * 100;
  }
  if (cashBack / 25 >= 1) {
    finalObject.quarter = Math.floor(cashBack / 25);
    cashBack -= finalObject.quarter * 25;
  }
  if (cashBack / 10 >= 1) {
    finalObject.dime = Math.floor(cashBack / 10);
    cashBack -= finalObject.dime * 10;
  }
  if (cashBack / 5 >= 1) {
    finalObject.nickel = Math.floor(cashBack / 5);
    cashBack -= finalObject.nickel * 5;
  } else if (cashBack / 1 >= 1) {
    finalObject.penny = Math.floor(cashBack / 1);
    cashBack -= finalObject.penny * 1;
  }
  return finalObject
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));