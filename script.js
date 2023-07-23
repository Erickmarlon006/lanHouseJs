var price = document.getElementById("price");
var time = document.getElementById("time");
var calcBtn = document.getElementById("calcBtn");
var priceMessage = document.getElementById("priceMessage");

calcBtn.addEventListener("click", calcular);
function calcular() {
  var finalPrice = Math.floor((parseInt(time.value) / 15)) * price.value;
  if((parseInt(time.value) % 15) > 0 ) finalPrice = finalPrice + parseInt(price.value);
  priceMessage.textContent = "Valor a Pagar R$: " + finalPrice.toFixed(2);
}
