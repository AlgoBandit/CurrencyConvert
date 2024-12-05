// searches for the element with the id "convert-btn" and attaches an event listener to it.
document.getElementById("convert-btn").addEventListener("click", function () {
    // Get the input value from the "amount" input field
  let amount = parseFloat(document.getElementById("amount").value);
// Get the selected currency from the "currency" select element
  let currency = document.getElementById("currency").value;
// Define the exchange rates for different currencies
  let result = convertCurrency(amount, currency); document.getElementById("result").innerText = result;
});
// function checks the rate for each currency
function convertCurrency(amount, currency) {
  let rate;

  if (currency === "euro") {
      rate = 3.8;
  } else if (currency === "dollar") {
      rate = 3.61;
  } else if (currency === "pound") {
      rate = 4.59;
  } else {
      return "Invalid currency";
  }
//checks if its empty or not a number
  if (isNaN(amount) || amount <= 0) {
      return "Invalid amount";
  }

  let converted = amount / rate;
  return "Converted amount: " + converted.toFixed(2) + " " + currency;
}
