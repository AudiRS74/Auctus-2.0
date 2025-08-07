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
export function calcFibonacciRetracement(high: number, low: number): number[] {
  const levels = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
  return levels.map(lvl => high - (high - low) * lvl);
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