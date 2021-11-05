function fruitPrice() {
  const applePrice = 0.59;
  const orangePrice = 0.49;
  const bananaPrice = 0.39;

  var appleCount = parseInt(document.getElementById('appleCount').value);
  var orangeCount = parseInt(document.getElementById('orangeCount').value);
  var bananaCount = parseInt(document.getElementById('bananaCount').value);

  if (checknumber(appleCount)) {
    if (checknumber(orangeCount)) {
      if (checknumber(bananaCount)) {
        // Remove error style if fixed
        document.getElementById('appleCount').classList.remove('error');
        document.getElementById('orangeCount').classList.remove('error');
        document.getElementById('bananaCount').classList.remove('error');

        // Get total price of items
        let appleTotalPrice = appleCount * applePrice;
        let orangeTotalPrice = orangeCount * orangePrice;
        let bananaTotalPrice = bananaCount * bananaPrice;

        // Round total price of items
        appleTotalPrice = Math.round(appleTotalPrice * 100) / 100;
        orangeTotalPrice = Math.round(orangeTotalPrice * 100) / 100;
        bananaTotalPrice = Math.round(bananaTotalPrice * 100) / 100;

        // Get Grand Total of Count and Price
        let itemTotalCount = appleCount + orangeCount + bananaCount;
        let orderTotalPrice = appleTotalPrice + orangeTotalPrice + bananaTotalPrice;

        // Printing it to DOM because that looks better. Alert also in printRecipt.
        printRecipt(appleCount, orangeCount, bananaCount, appleTotalPrice, orangeTotalPrice, bananaTotalPrice, itemTotalCount, orderTotalPrice);
      } else {
        document.getElementById('bananaCount').classList.add('error');
      }
    } else {
      document.getElementById('orangeCount').classList.add('error');
    }
  } else {
    document.getElementById('appleCount').classList.add('error');
  }


}

function checknumber(number) {
  if (number <= 99 && number >= 0) {
    return true;
  } else {
    return false;
  }
}



function printRecipt(appleCount, orangeCount, bananaCount, appleTotalPrice, orangeTotalPrice, bananaTotalPrice, itemTotalCount, orderTotalPrice) {
  console.log(appleCount, orangeCount, bananaCount, appleTotalPrice, orangeTotalPrice, bananaTotalPrice, itemTotalCount, orderTotalPrice);
  // Create orderSummary
  let summary = "";
  summary += "<table>";
  summary += "<tr>";
  summary += "<th>Fruit</th>";
  summary += "<th>Count</th>";
  summary += "<th>Price</th>";
  summary += "</tr>";

  summary += "<tr>";
  summary += "<td>Apples</td>";
  summary += "<td>" + appleCount + "</td>";
  summary += "<td>$" + appleTotalPrice + "</td>";
  summary += "</tr>";

  summary += "<tr>";
  summary += "<td>Oranges</td>";
  summary += "<td>" + orangeCount + "</td>";
  summary += "<td>$" + orangeTotalPrice + "</td>";
  summary += "</tr>";

  summary += "<tr>";
  summary += "<td>Bananas</td>";
  summary += "<td>" + bananaCount + "</td>";
  summary += "<td>$" + bananaTotalPrice + "</td>";
  summary += "</tr>";
  summary += "</table>";

  // Get Grand Total
  let orderGrandTotal = orderTotalPrice * 1.05;
  orderGrandTotal = Math.round(orderGrandTotal)
  console.log(orderTotalPrice);
  console.log(orderGrandTotal);

  // Get Tax
  let tax = orderGrandTotal - orderTotalPrice;

  // Round totals
  orderTotalPrice = Math.round(orderTotalPrice * 100) / 100;
  tax = Math.round(tax * 100) / 100;
  orderGrandTotal = Math.round(orderGrandTotal * 100) / 100;

  // get DOM elements
  let orderSummary = document.getElementById('orderSummary');
  let itemTotal = document.getElementById('itemTotal');
  let orderTotal = document.getElementById('orderTotal');
  let totalTax = document.getElementById('totalTax');
  let grandTotal = document.getElementById('grandTotal');

  // Render data to DOM
  orderSummary.innerHTML = summary;
  itemTotal.innerHTML = itemTotalCount;
  orderTotal.innerHTML = orderTotalPrice;
  totalTax.innerHTML = tax;
  grandTotal.innerHTML = orderGrandTotal;

  // Show recipt
  document.getElementById('orderCard').classList.remove('hidden');

  // Alert recipt because thats what the assignment said to do.
  alert("Your Total Cost is: $" + orderGrandTotal);
}
