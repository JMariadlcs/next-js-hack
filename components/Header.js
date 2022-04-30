// This file is used to interact with web3uikit from moralis to interact with the front-end
// NOTICE: we are NOT USING MORALIS SERVER - just the tools

import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
    <nav>
        <ConnectButton moralisAuth={false}/>
    </nav>
    );
}