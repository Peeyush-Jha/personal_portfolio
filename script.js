// Smooth scroll to a specific section
function smoothScroll(targetId) {
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth"
  });
}

/// Ensure TradingView script is loaded before initializing
function ensureTradingViewLoaded(callback) {
  if (typeof TradingView !== "undefined") {
    callback();
  } else {
    setTimeout(() => ensureTradingViewLoaded(callback), 500);
  }
}

// Function to load the TradingView widget
function loadTradingViewWidget(symbol = "NASDAQ:AAPL") {
  ensureTradingViewLoaded(() => {
    document.getElementById("tradingview_chart").innerHTML = "";

    new TradingView.widget({
      "container_id": "tradingview_chart",
      "width": "100%",
      "height": "100%",
      "symbol": symbol.toUpperCase(),
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "hide_top_toolbar": true,
      "save_image": false
    });
  });
}

// Function to update the stock chart when the user clicks the button
function updateStockChart() {
  let stockSymbol = document.getElementById("stockSymbol").value.trim();
  if (stockSymbol === "") {
    alert("Please enter a valid stock symbol (e.g., AAPL, TSLA, BTCUSD)");
    return;
  }

  loadTradingViewWidget(stockSymbol);
}

// Attach function to global `window` object
window.updateStockChart = updateStockChart;

// Load default chart on page load
document.addEventListener("DOMContentLoaded", function() {
  loadTradingViewWidget();
});




// Reveal elements on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => observer.observe(el));
