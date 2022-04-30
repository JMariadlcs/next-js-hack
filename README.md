# next-js-hack


## Dependencies and Set-Up
It is possible to work with normal testnets (Rinkeby, Mumbai, etc).

In this case are going to run our own local blockchain to do it faster. 

To do show:

- Install hardhat-simple-storage from Patrick:
```bash
cd ..
git clone https://github.com/PatrickAlphaC/hardhat-simple-storage
cd hardhat-simple-storage
```

- Make local network go alive:
```bash
yarn hardhat node
```

- Create Next.js project:
```bash
yarn create next-app .
```

Remember: Reset MetaMask account each time you are working with a new project in local Blockchain.

## Resources
- [Full-stack-web3-connectors](https://github.com/PatrickAlphaC/full-stack-web3-metamask-connectors): a repo that contains different ways of using web3 connectors.
- [Nextjs repo](https://github.com/PatrickAlphaC/nextjs-moralis-metamask-connect/tree/cd4ff2ce34ecec6874e8fa32df8f44cef962b6e7): repo that we are going to work with.
- [Hardhat simple storage](https://github.com/PatrickAlphaC/hardhat-simple-storage): Patricks repo clonned to run our own local Blockchain network and interact with its Smart Contracts.
