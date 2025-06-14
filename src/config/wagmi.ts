import { createConfig, http } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    metaMask(),
    walletConnect({ 
      projectId: 'your-project-id' // You'll need to get this from WalletConnect
    }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
})