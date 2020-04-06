/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  var costUsd = price * 0.19;
  var feesUsd = costUsd * 1 / 100;
  var totalCostUsd = costUsd + feesUsd;
  return "R$" + totalCostUsd;
}
function convertToBRL(price) {
  var costBrl = price * 5.35;
  var feesBrl = costBrl * 1 / 100;
  var totalCostBrl = costBrl + feesBrl;
  return "R$" + totalCostBrl;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);