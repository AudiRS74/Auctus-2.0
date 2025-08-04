import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Colors from "../../constants/Colors";
// You would fetch real user data from Supabase or your backend

const mockUsers = [
  { id: "u1", name: "Alice", balance: 12000, trades: 54 },
  { id: "u2", name: "Bob", balance: 9800, trades: 32 },
  { id: "u3", name: "Charlie", balance: 15000, trades: 65 },
];

export default function MultiUserDashboardScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with real fetch from Supabase
    setUsers(mockUsers);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, padding: 20 }}>
      <Text style={{ color: Colors.text, fontSize: 24, fontWeight: "bold" }}>Multi-User Dashboard</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: Colors.card, marginBottom: 8, padding: 8 }}>
            <Text style={{ color: Colors.text, fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: Colors.textMuted }}>Balance: {item.balance} | Trades: {item.trades}</Text>
          </View>
        )}
      />
    </View>
  );
}