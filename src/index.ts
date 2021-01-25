import { fetchBlockchainData } from "./modules/blockchain";
import { fetchMarketData } from "./modules/market-status";
import { initServer } from "./system/server";

initServer();
fetchBlockchainData();
fetchMarketData();
