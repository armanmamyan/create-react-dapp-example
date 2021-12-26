import {useContext} from "react";
import {DAppContext} from "./context";
import Mint from "./components/Mint";
import ConnectWallet from "./components/ConnectWallet";

import './main.css'


const App = () => {
    const {
        active,
        connected
    } = useContext(DAppContext);

    return (
        <>
            <h1>
                Decentralized React App Boilerplate
            </h1>
            <hr/>
            <h6>
                This boilerplate will help you to easily connect your Smart Contract with your App and use its methods
                to show the
                <b> price, total supply, maximum allowed tokens per purchase, mint from smart contract and etc.</b>
                <br/>
                <a
                    href="https://rinkeby.etherscan.io/address/0xf204019bb6126d690dd367cdcdeb5c4a63d3b186#code"
                    target="_blank"
                    rel="noreferrer"
                >
                    Here
                </a>
                you can find the simple version of Smart Contract published on testnet and created by
                <a
                    href="https://github.com/GSD-Coding-Club/solidity-nft-contract"
                    target="_blank"
                    rel="noreferrer"
                >
                    GSD Club
                </a>
            </h6>
            <hr/>
            {
                active && connected ? (
                    <Mint/>
                ) : (
                    <ConnectWallet/>
                )
            }
        </>
    )
}

export default App;