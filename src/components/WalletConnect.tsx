import React from 'react'
import { useConnect, useAccount } from 'wagmi'
import { motion } from 'framer-motion'
import { Wallet } from 'lucide-react'

interface WalletConnectProps {
  onConnect: () => void
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const { connectors, connect } = useConnect()
  const { isConnected } = useAccount()

  React.useEffect(() => {
    if (isConnected) {
      onConnect()
    }
  }, [isConnected, onConnect])

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Wallet</h2>
          <p className="text-gray-600">
            Connect your wallet to mint NFTs and access the SocialChain community
          </p>
        </div>

        <div className="space-y-3">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="w-full flex items-center justify-center space-x-3 p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-blue-600">
                {connector.name}
              </span>
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-sm text-center mt-6">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </motion.div>
  )
}