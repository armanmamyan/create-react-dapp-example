# React Dapp Boilerplate

Simple React Dapp Boilerplate with **Smart Contract** integration.
This package will help you to easily integrate the smart contract methods and connect Metamask/Coinbase wallets so the DApp user wil be able to do the minting, check the price, see total supply of nfts and etc.

## Installation

```
npx create-react-dapp-example folder-name

cd folder-name && yarn start
```
>or

Download/clone the repositiory

```
npm install or yarn add .

yarn start
```

## Production

```
yarn build
```

# Development Roadmap

- Get the connected wallet balance and check if there is enough amount to do the purchase
- Investigate and calculate the estimated gas fee on purchase state
- Create a modal for different wallet states
- WalletLink integration
- WebSocket implementation for real tiime checking the total supply of the collection
