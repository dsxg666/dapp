let isInstallMetaMask = window.ethereum !== 'undefined';

$("#enableEthereumButton").click(async () => {
    if (isInstallMetaMask === false) {
        alert("请先安装 MetaMask！");
    } else {
        let accounts = await ethereum.request({method: 'eth_requestAccounts'});
        let chainId = await ethereum.request({method: 'eth_chainId'});
        currentAccount = accounts[0];
        currentChainId = chainId;
        erc20Contract.methods.balanceOf(accounts[0]).call().then(function (result) {
            currentDsxgCoin = result;
            $("#showDsxgCoin").text("DsxgCoin：" + result);
        })
        $("#showAccount").text("账户地址：" + formatAccount(accounts[0]));
        $("#showNetwork").text("网络：" + chainIdToName(chainId));
    }
})

ethereum.on('accountsChanged', (accounts) => {
    currentAccount = accounts[0];
    $("#showAccount").text("账户地址：" + formatAccount(accounts[0]));
    erc20Contract.methods.balanceOf(accounts[0]).call().then(function (result) {
        currentDsxgCoin = result;
        $("#showDsxgCoin").text("DsxgCoin：" + result);
    })
});
ethereum.on('chainChanged', (chainId) => {
    currentChainId = chainId;
    $("#showNetwork").text("网络：" + chainIdToName(chainId));
});

function chainIdToName(chainId) {
    if (chainId === "0xaa36a7") {
        return "Sepolia";
    } else if (chainId === "0x5") {
        return "Goerli"
    } else if (chainId === "0x1") {
        return "Ethereum Mainnet";
    } else {
        return "Unknown Network";
    }
}

function formatAccount(account) {
    let firstPart = account.substring(0, 5);
    let secondPart = account.substring(38, 42);
    return firstPart + "..." + secondPart;
}