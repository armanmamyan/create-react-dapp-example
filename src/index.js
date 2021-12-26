import {render} from 'react-dom';
import { DAppProvider } from "./context";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import App from './App';

const app = document.getElementById('dapp');

const libraryProvider = (provider) => {
    console.log('Provider', provider);
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000;
    return library;
}

render(
    <Web3ReactProvider getLibrary={libraryProvider}>
        <DAppProvider>
            <App />
        </DAppProvider>
    </Web3ReactProvider>,
    app
);