import DashboardScreen from "../app/(tabs)/dashboard";
import ChartScreen from "../app/(tabs)/chart";
import AnalyticsScreen from "../app/(tabs)/analytics";
import StrategyBuilderScreen from "../app/(tabs)/strategyBuilder";
import SignalsScreen from "../app/(tabs)/signals";
import BrokerConfigScreen from "../app/(tabs)/brokerConfig";
import SettingsScreen from "../app/(tabs)/settings";
import CustomChartScreen from "../app/(tabs)/customChart";
import BacktestingScreen from "../app/(tabs)/backtesting";
import MultiUserDashboardScreen from "../app/(tabs)/multiUserDashboard";
import RiskManagementScreen from "../app/(tabs)/riskManagement";
import PortfolioAnalyticsScreen from "../app/(tabs)/portfolioAnalytics";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen name="StrategyBuilder" component={StrategyBuilderScreen} />
        <Tab.Screen name="Signals" component={SignalsScreen} />
        <Tab.Screen name="BrokerConfig" component={BrokerConfigScreen} />
        <Tab.Screen name="CustomChart" component={CustomChartScreen} />
        <Tab.Screen name="Backtesting" component={BacktestingScreen} />
        <Tab.Screen name="MultiUserDashboard" component={MultiUserDashboardScreen} />
        <Tab.Screen name="RiskManagement" component={RiskManagementScreen} />
        <Tab.Screen name="PortfolioAnalytics" component={PortfolioAnalyticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}