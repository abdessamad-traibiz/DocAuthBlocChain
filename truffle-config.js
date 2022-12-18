var HDWalletProvider = require("@truffle/hdwallet-provider");
var fs = require('fs');
var infura_apikey = "d3a4ce5fdbcf4a34b32f1204afdc7e2b";
var mnemonic = "sight spike move then permit correct wet enter dove spray chase defy";
var address = "0x3eE35D4661B16E01f5Ef608e2FD1D2969bADbf27";


module.exports = {
    /* This is the configuration for the development network. */
    networks: {
        development: {
            host: '127.0.0.1',
            port: '7545',
            network_id: '*' //connect to any network
        },
        ropsten: {
            provider: function() {
              return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
            },
            network_id: 3,
            from: address,
            gas: 4000000,
            timeoutBlocks: 30000,
            skipDryRun: true,
            networkCheckTimeout: 5000000
          }
    },
    contracts_directory: './contracts',
    contracts_build_directory: './abis',
    compilers: {
        solc: {
            version: '^0.7.0',
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}