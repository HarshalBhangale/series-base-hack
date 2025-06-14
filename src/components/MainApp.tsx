import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, MapPin, User, Users, Settings } from 'lucide-react'
import { HomeTab } from './tabs/HomeTab'
import { NearbyTab } from './tabs/NearbyTab'
import { ProfileTab } from './tabs/ProfileTab'

type TabType = 'home' | 'nearby' | 'profile'

export const MainApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home')

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'nearby', label: 'Nearby', icon: MapPin },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />
      case 'nearby':
        return <NearbyTab />
      case 'profile':
        return <ProfileTab />
      default:
        return <HomeTab />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Proximal.wtf</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        {renderActiveTab()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 px-6 py-4">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className="flex flex-col items-center space-y-1 relative"
                >
                  <div className={`p-3 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-blue-500' : 'text-gray-500'
                  }`}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}