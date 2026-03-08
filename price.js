// Fetch live BTC price from CoinGecko and update the DOM
async function updateBTCPrice() {
  try {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const res = await fetch(url);
    const data = await res.json();
    const price = data.bitcoin.usd;
    const formatted = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById('btc-price').textContent = formatted;
  } catch (e) {
    document.getElementById('btc-price').textContent = 'Error';
  }
}
// Run on page load
if (document.getElementById('btc-price')) {
  updateBTCPrice();
  setInterval(updateBTCPrice, 10000); // Update every 10 seconds
}