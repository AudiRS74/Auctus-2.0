export function calcRSI(prices: number[], period = 14): number[] {
  const rsis = Array(prices.length).fill(null);
  for (let i = period; i < prices.length; i++) {
    let gains = 0, losses = 0;
    for (let j = i - period + 1; j <= i; j++) {
      const change = prices[j] - prices[j - 1];
      if (change > 0) gains += change;
      else losses -= change;
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    rsis[i] = 100 - (100 / (1 + rs));
  }
  return rsis;
}
export function calcSMA(prices: number[], period: number): number[] {
  return prices.map((_, idx, arr) =>
    idx >= period - 1
      ? arr.slice(idx - period + 1, idx + 1).reduce((a, b) => a + b, 0) / period
      : null
  );
}
export function calcEMA(prices: number[], period: number): number[] {
  const emas = Array(prices.length).fill(null);
  const k = 2 / (period + 1);
  let prev = prices.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period - 1; i < prices.length; i++) {
    prev = prices[i] * k + prev * (1 - k);
    emas[i] = prev;
  }
  return emas;
}
export function calcMACD(prices: number[], fast=12, slow=26, signal=9) {
  const emaFast = calcEMA(prices, fast);
  const emaSlow = calcEMA(prices, slow);
  const macd = emaFast.map((v, i) => v !== null && emaSlow[i] !== null ? v - emaSlow[i] : null);
  const macdSignal = calcEMA(macd.filter(v => v !== null), signal);
  return { macd, macdSignal };
}
export function calcBollingerBands(prices: number[], period=20, mult=2) {
  const sma = calcSMA(prices, period);
  const bands = sma.map((m, i) => {
    if (i < period - 1 || m === null) return { upper: null, middle: null, lower: null };
    const slice = prices.slice(i - period + 1, i + 1);
    const stdev = Math.sqrt(slice.reduce((a, b) => a + Math.pow(b - m, 2), 0) / period);
    return {
      upper: m + mult * stdev,
      middle: m,
      lower: m - mult * stdev,
    };
  });
  return bands;
}
export function calcATR(highs: number[], lows: number[], closes: number[], period=14) {
  const atrs = [];
  for (let i = 1; i < highs.length; i++) {
    const tr = Math.max(
      highs[i] - lows[i],
      Math.abs(highs[i] - closes[i-1]),
      Math.abs(lows[i] - closes[i-1])
    );
    atrs.push(tr);
  }
  const atr = calcSMA(atrs, period);
  return atr;
}
export function calcStochastic(highs: number[], lows: number[], closes: number[], period=14) {
  return closes.map((close, idx) => {
    if (idx < period - 1) return null;
    const periodHigh = Math.max(...highs.slice(idx - period + 1, idx + 1));
    const periodLow = Math.min(...lows.slice(idx - period + 1, idx + 1));
    return 100 * ((close - periodLow) / (periodHigh - periodLow));
  });
}