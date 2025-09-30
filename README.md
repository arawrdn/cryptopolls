# CryptoPolls

**CryptoPolls** – A decentralized voting platform where users can vote on proposals using crypto to weight their votes. Built with WalletConnect, AppKit, and Ethers.js v5.

---

## Features

- Connect wallet via WalletConnect
- Vote on polls using ETH or stablecoins
- Track votes with transaction hash and status
- Minimal and clean React + TypeScript setup

---

## Tech Stack

- **React** – Frontend UI  
- **TypeScript** – Type safety  
- **AppKit (`@reown/appkit`)** – Wallet connection & blockchain interaction  
- **AppKit Adapter Ethers5 (`@reown/appkit-adapter-ethers5`)** – Ethers.js v5 integration  
- **WalletConnect** – Connect any compatible wallet  

---

## Setup & Installation

1. Clone the repo:

```bash
git clone https://github.com/arawrdn/cryptopolls.git
cd cryptopolls

2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open http://localhost:3000
 in your browser.

Usage

1. Click Connect Wallet to connect your wallet via WalletConnect.

2. View the list of polls.

3. Click a poll option to cast your vote using crypto.

4. The transaction status will be tracked (pending, confirmed, failed).

Notes

Replace 0xPollContractAddressHere in pollService.ts with the actual smart contract address for polls.

Currently voting weight is based on the amount of ETH sent. You can adjust the logic in votePoll to support other tokens or staking mechanisms.
