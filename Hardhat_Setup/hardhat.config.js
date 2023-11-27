require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai_testnet: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      chainId: 80001,
      accounts: [
        `${process.env.PRIVATE_KEY}`,
      ],
    },
  },
  etherscan: {
    apiKey: {
      // sepolia: process.env.ETHERSCAN_API_KEY as string,
      polygonMumbai: process.env.ETHERSCAN_API_FOR_POLYGON,
    },
  },
};
