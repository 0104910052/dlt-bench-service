import axios from "axios";
import { config } from "../config/system";
import env from "../system/load-env-data";
import {
  MarketStatusResponseData,
  NetworkMarketStatus,
} from "../types/market-stats";
import _ from "lodash";

export const fetchMarketData = async () => {
  const { data }: { data: MarketStatusResponseData } = await axios.get(
    `${env.MARKET_INFO_API_URL}${env.MARKET_INFO_API_VERSION}/coins/markets?vs_currency=usd&ids=${config.networksActive}&order=market_cap_desc&sparkline=false&price_change_percentage=true`
  );

  const networkMarketStatus: NetworkMarketStatus = data.map((network) => {
    return _.pick(network, config.networksMarketFiels);
  });

  return networkMarketStatus;
};
