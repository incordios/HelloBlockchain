const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    abs_wfublockchain03_wfubcmember03_wfubcmember03: {
      network_id: "*",
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/rosariomonge/Desktop/HelloBlockChain2/HelloBlockChain2.env', 'utf-8'), "https://wfubcmember03.blockchain.azure.com:3200/HttL-synwn-CbzGm2ULB8032")
    }
  },
  compilers: {
    solc: {
      version: "0.7.0"
    }
  }
};
