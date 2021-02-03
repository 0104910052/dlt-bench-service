import { IndividualNetworkMarketStatusResponse } from './market-stats';
import { IndividualNetworkUsageStatusResponse } from './network-stats';

export type SystemConfig = {
  networksActive: string;
  networksMarketFiels: Array<keyof IndividualNetworkMarketStatusResponse>;
  networkUsageFields: Array<keyof IndividualNetworkUsageStatusResponse>;
  pingInterval: number;
};
