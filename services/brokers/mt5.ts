import { BrokerAdapter } from "./base";
import axios from "axios";

export class MT5Broker implements BrokerAdapter {
  async fetchMarketData(symbol: string) {
    try {
      return { prices: [100, 102, 101, 104], meta: { tickSize: 0.01 } };
    } catch (error) {
      throw new Error(error?.message || "MT5 market data error");
    }
  }
  async placeOrder({ symbol, type, quantity, apiKey, apiSecret }) {
    try {
      return { status: "filled", orderId: Math.random().toString(), symbol, type, quantity };
    } catch (error) {
      throw new Error(error?.message || "MT5 order error");
    }
  }
  async getOrderStatus(orderId: string, apiKey: string, apiSecret: string) {
    try {
      return { orderId, status: "filled" };
    } catch (error) {
      throw new Error(error?.message || "MT5 order status error");
    }
  }
  async getAccountInfo(apiKey: string, apiSecret: string) {
    try {
      return { balance: 10000, equity: 9990, margin: 100 };
    } catch (error) {
      throw new Error(error?.message || "MT5 account info error");
    }
  }
}