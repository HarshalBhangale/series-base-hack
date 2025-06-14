import React, { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import { LandingPage } from './components/LandingPage'
import { VideoLoading } from './components/VideoLoading'
import { WalletConnect } from './components/WalletConnect'
import { MintingScreen } from './components/MintingScreen'
import { MainApp } from './components/MainApp'

type AppState = 'landing' | 'video' | 'wallet' | 'minting' | 'app'

const queryClient = new QueryClient()

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing')

  const handleJoinUs = () => {
    setCurrentState('video')
  }

  const handleVideoComplete = () => {
    setCurrentState('wallet')
  }

  const handleWalletConnect = () => {
    setCurrentState('minting')
  }

  const handleMintComplete = () => {
    setCurrentState('app')
  }

  const renderCurrentState = () => {
    switch (currentState) {
      case 'landing':
        return <LandingPage onJoinUs={handleJoinUs} />
      case 'video':
        return <VideoLoading onVideoComplete={handleVideoComplete} />
      case 'wallet':
        return <WalletConnect onConnect={handleWalletConnect} />
      case 'minting':
        return <MintingScreen onMintComplete={handleMintComplete} />
      case 'app':
        return <MainApp />
      default:
        return <LandingPage onJoinUs={handleJoinUs} />
    }
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen">
          {renderCurrentState()}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App