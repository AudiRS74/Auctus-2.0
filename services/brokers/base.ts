export interface BrokerAdapter {
  fetchMarketData(symbol: string): Promise<{ prices: number[], meta?: any }>;
  placeOrder(params: { symbol: string, type: string, quantity: number, apiKey: string, apiSecret: string }): Promise<any>;
  getOrderStatus(orderId: string, apiKey: string, apiSecret: string): Promise<any>;
  getAccountInfo(apiKey: string, apiSecret: string): Promise<{ balance: number, equity: number, margin: number }>;
}