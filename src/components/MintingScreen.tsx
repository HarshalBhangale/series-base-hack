import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAccount, useWriteContract, useReadContract } from 'wagmi'
import { parseEther } from 'viem'
import { Sparkles, Loader2 } from 'lucide-react'
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../contracts/NFTContract'

interface MintingScreenProps {
  onMintComplete: () => void
}

export const MintingScreen: React.FC<MintingScreenProps> = ({ onMintComplete }) => {
  const [isMinting, setIsMinting] = useState(false)
  const { address } = useAccount()
  const { writeContract } = useWriteContract()

  const { data: totalSupply } = useReadContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'totalSupply',
  })

  const handleMint = async () => {
    if (!address) return
    
    setIsMinting(true)
    
    try {
      await writeContract({
        address: NFT_CONTRACT_ADDRESS,
        abi: NFT_CONTRACT_ABI,
        functionName: 'mint',
        args: [address, `https://api.socialchain.app/metadata/${Date.now()}`],
        value: parseEther('0.001'), // Small mint fee
      })
      
      // Simulate waiting for transaction
      setTimeout(() => {
        setIsMinting(false)
        onMintComplete()
      }, 3000)
    } catch (error) {
      console.error('Minting failed:', error)
      setIsMinting(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 z-50 flex items-center justify-center p-6"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full text-center border border-white/20">
        <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Mint Your NFT</h2>
        <p className="text-white/80 mb-8 leading-relaxed">
          Create your unique identity on the blockchain. This NFT will represent your membership in the SocialChain community.
        </p>
        
        <div className="bg-white/5 rounded-2xl p-4 mb-8">
          <div className="flex justify-between text-white/60 text-sm mb-2">
            <span>Total Minted</span>
            <span>{totalSupply?.toString() || '...'}</span>
          </div>
          <div className="flex justify-between text-white/60 text-sm mb-2">
            <span>Network</span>
            <span>Base Sepolia</span>
          </div>
          <div className="flex justify-between text-white/60 text-sm">
            <span>Price</span>
            <span>0.001 ETH</span>
          </div>
        </div>

        <button
          onClick={handleMint}
          disabled={!address || isMinting}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isMinting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Minting...
            </>
          ) : (
            'Mint NFT'
          )}
        </button>

        {!address && (
          <p className="text-white/60 text-sm mt-4">
            Please connect your wallet to mint
          </p>
        )}
      </div>
    </motion.div>
  )
}