// BTC Chart — fetches 1-week trend from CoinGecko
async function renderBTCChart() {
  const ctx = document.getElementById('btcChart');
  if (!ctx) return;

  try {
    // Get 7d price history
    const resp = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
    const data = await resp.json();
    const prices = data.prices;

    const labels = prices.map(item => {
      const date = new Date(item[0]);
      return `${date.getMonth()+1}/${date.getDate()}`;
    });
    const dataset = prices.map(item => item[1]);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'BTC Price (USD)',
          backgroundColor: 'rgba(240,185,11,0.07)',
          borderColor: '#f0b90b',
          data: dataset,
          borderWidth: 2,
          tension: 0.22,
          pointRadius: 0,
          fill: true
        }]
      },
      options: {
        plugins: { legend: { display: false }},
        scales: {
          x: {
            grid: { color: '#252739', drawOnChartArea: false},
            ticks: { color: '#b0bac8' }
          },
          y: {
            grid: { color: '#252739' },
            ticks: { color: '#b0bac8' }
          }
        }
      }
    });
  } catch (e) {
    ctx.parentNode.innerHTML = '<div style="color:#ff4949;">Failed to load BTC chart.</div>';
  }
}

// Only run if chart is present
if (document.getElementById('btcChart')) renderBTCChart();