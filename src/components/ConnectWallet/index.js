import {useContext} from "react";
import {DAppContext} from "../../context";

const ConnectWallet = () => {
    const {
        loading,
        connectWallet,
    } = useContext(DAppContext);
    return(
        <div className='connect-btn-container'>
            <button
                type="button"
                onClick={connectWallet}
            >
                {loading ? 'Loading...' : 'Connect Wallet'}
            </button>
        </div>
    )
}

export default ConnectWallet