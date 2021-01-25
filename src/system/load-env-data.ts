import dotenv from "dotenv";
dotenv.config();

export const loadEnvData = () => {
  return {
    MARKET_INFO_API_URL: process.env.MARKET_INFO_API_URL || "",
    MARKET_INFO_API_VERSION: process.env.MARKET_INFO_API_VERSION || "",
    NETWORK_INFO_API_URL: process.env.NETWORK_INFO_API_URL || ""
  };
};

const env = loadEnvData();

export default env;
