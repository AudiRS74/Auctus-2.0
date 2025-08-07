import { MT5Broker } from "./mt5";
export const BROKERS = { mt5: new MT5Broker() };
export type BrokerKey = keyof typeof BROKERS;
export function getBrokerService(key: BrokerKey) { return BROKERS[key]; }