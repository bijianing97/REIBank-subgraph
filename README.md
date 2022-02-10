# REIBank Subgraph

An example about simple bank to get you started with The Graph on REI network

## Setup
install the node dependencies using 
```
npm i
```
Create the TS types for The Graph (requires the `artifacts` folder created by contract compilation)
```
npm run codegen
```
## Deploying contracts
For deploying contracts on REI testnet, you'll need a funded account and its private key. Store your private key and account address for REI testnet deployment as an ENV variable:

```sh
export ADDR = "your address"
export PRIVATEKEY = "your privatekey"
```
Compile the contracts:
```
npm run build
```
To deploy to a REI testnet node you can run:
```
npm run deploy:reitest
```

> For more infomation see the REI docs on https://docs.rei.network/