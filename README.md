# RenovaCoin (RENO)

![RenovaCoin Logo](https://github.com/SourceShift/renova-coin/blob/main/logo/reno-logo.webp)

Renova Token (RENO) is the token of choice for the **Renova Crowdfunding Platform**, a decentralized system designed to fund community renovation projects in the DACH region. RENO enables communities, supporters, and local stakeholders to contribute to meaningful projects that enhance public spaces, preserve heritage, and promote sustainability.

## Token Details

- **Name**: RenovaCoin
- **Symbol**: RENO
- **Network**: Solana
- **Seller Fee Basis Points**: 2.5%
- **Total Supply**: 1,000,000,000 RENO

## Features

- **Community Crowdfunding**: Supporters can contribute to projects using RENO, directly impacting local renovations.
- **Transparent Funding**: Blockchain-powered transparency ensures all contributions are secure and traceable.
- **Sustainable Impact**: Focus on renovation projects that support environmental sustainability and community well-being.
- **Region**: DACH (Germany, Austria, Switzerland)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- Solana CLI tools: Follow instructions [here](https://docs.solana.com/cli/install-solana-cli-tools).
- A Solana wallet (e.g., [Phantom Wallet](https://phantom.app/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/renova-coin.git
   cd renova-coin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Deployment

To deploy the RenovaCoin token on the Solana blockchain, run the following script:

```bash
node scripts/deploy.js
```

### Interacting with RenovaCoin

You can interact with the deployed contract using the `interact.js` script:

```bash
node scripts/interact.js
```

### Token Metadata

The file `renovacoin-metadata.json` contains all relevant metadata for RenovaCoin, including token attributes, properties, and descriptions. This metadata can be used for minting, metadata updates, and integration with other services.

## License

This project is licensed under the MIT License.
