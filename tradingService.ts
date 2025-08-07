export async function fetchInstruments() {
  // Replace with Supabase or your DB/API logic
  return [
    { id: 1, symbol: "AAPL", is_active: true },
    { id: 2, symbol: "EURUSD", is_active: false },
  ];
}
export async function fetchTrades() {
  // Replace with Supabase or your DB/API logic
  return [];
}
export async function executeTrade({ symbol, type, quantity, apiKey, apiSecret }) {
  // Replace with real broker API integration (MT5 WebAPI)
  return {
    id: Math.random(),
    symbol,
    type,
    quantity,
    status: "pending",
    created_at: new Date().toISOString(),
  };
}