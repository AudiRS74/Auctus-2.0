import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import Colors from "../../constants/Colors";
import { calcRSI } from "../../services/indicatorEngine";

export default function BacktestingScreen() {
  const [results, setResults] = useState([]);
  const [running, setRunning] = useState(false);

  async function runBacktest() {
    setRunning(true);
    // Simulate fetching historical prices
    const prices = Array.from({ length: 100 }, (_, i) => 100 + Math.sin(i / 10) * 10);
    const rsi = calcRSI(prices, 14);
    // Simulate simple strategy: Buy when RSI < 30, Sell when RSI > 70
    const trades = [];
    for (let i = 14; i < prices.length; i++) {
      if (rsi[i] < 30) trades.push({ type: "BUY", price: prices[i], idx: i });
      else if (rsi[i] > 70) trades.push({ type: "SELL", price: prices[i], idx: i });
    }
    setResults(trades);
    setRunning(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, padding: 20 }}>
      <Text style={{ color: Colors.text, fontSize: 24, fontWeight: "bold" }}>Backtesting</Text>
      <Button title={running ? "Running..." : "Run Backtest"} onPress={runBacktest} color={Colors.accent} disabled={running} />
      <FlatList
        data={results}
        keyExtractor={item => item.idx.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: Colors.card, marginBottom: 8, padding: 8 }}>
            <Text style={{ color: Colors.text }}>{item.type} @ {item.price.toFixed(2)} (step {item.idx})</Text>
          </View>
        )}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}