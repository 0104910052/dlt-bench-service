import { SystemConfig } from '../types/system';

export const config: SystemConfig = {
    networksActive: [
        'bitcoin',
        'ethereum',
        'polkadot',
        'ripple',
        'cardano',
        'chainlink',
        'stellar',
        'vechain',
        'iota',
        'kusama',
        'hedera-hashgraph',
        'algorand',
    ].join(','),
    networksMarketFiels: [
        'id',
        'symbol',
        'image',
        'current_price',
        'market_cap',
        'market_cap_rank',
        'price_change_percentage_24h',
    ],
    networkUsageFields: ['average_transaction_fee_usd_24h', 'transactions_24h'],
};
