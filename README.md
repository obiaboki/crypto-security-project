# Crypto Security Simulation Dashboard

_A professional, educational crypto exchange simulation dashboard to teach about phishing risks and wallet security._

## Features

- **Main Dashboard (`index.html`):**
  - Shows fake BTC and USDT balances
  - Live Bitcoin price via CoinGecko API (auto-refresh)
  - ‘Withdraw’ button leads to simulation page
  - Chart with BTC price trends (uses Chart.js)
  - Sidebar navigation (Dashboard, Trade, Wallet, Security)
  - Dark, Binance-style UI

- **Withdraw Simulation (`withdraw.html`):**
  - Inputs for (fake) wallet address and "private key"
  - Prominent warning when simulating withdraw:  
    ⚠ **This is a phishing simulation. Never share your private keys.**
  - No sensitive info is collected or sent anywhere

## Quick Start

1. **Clone or Download** this repository.
2. **Open `index.html`** in your browser or deploy on GitHub Pages.
3. **Educational Use Only:** This project is for learning to spot phishing; never enter real credentials or use this for actual trading.

## File Overview

- `index.html` — Main dashboard
- `withdraw.html` — Simulated withdrawal/phishing page
- `style.css` — Dark theme, Binance-inspired styling
- `price.js` — Fetches live BTC price from CoinGecko API
- `chart.js` — Plots BTC price chart (uses Chart.js CDN)

## Live Demo

You can [deploy on GitHub Pages](https://pages.github.com/) for testing or education.

---

**Security Disclaimer:**  
No real transactions or data collection. DO NOT enter real private keys; this is *only* a simulation to teach safe crypto practices.