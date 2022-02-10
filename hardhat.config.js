require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-truffle5')
require('hardhat-deploy')
require('hardhat-deploy-ethers')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// const accounts = {
//   default:process.env.PRIVATEKEY 
// }

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  namedAccounts: {
    deployer: {
      localhost: 0,
      default: process.env.ADDR || 0,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.6.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    reidev: {
      url: 'https://rpc-devnet.rei.network/',
      accounts:[process.env.PRIVATEKEY],
      chainId: 23579,
      live: true,
      saveDeployments: true,
    },
    reitest: {
      url: 'https://rpc-testnet.rei.network',
      accounts:[process.env.PRIVATEKEY],
      chainId: 12357,
      live: true,
      saveDeployments: true,
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
}
