import React from 'react'
import { motion } from 'framer-motion'
import { useAccount } from 'wagmi'
import { Sparkles, Users, MapPin, Trophy } from 'lucide-react'

export const HomeTab: React.FC = () => {
  const { address } = useAccount()

  const stats = [
    { label: 'Connections', value: '24', icon: Users, color: 'from-blue-500 to-indigo-600' },
    { label: 'Nearby', value: '7', icon: MapPin, color: 'from-green-500 to-teal-600' },
    { label: 'NFTs Owned', value: '3', icon: Trophy, color: 'from-purple-500 to-pink-600' },
  ]

  const recentActivity = [
    { type: 'connection', user: 'Alice Johnson', time: '2 min ago', avatar: '👩‍💼' },
    { type: 'nearby', user: 'Bob Smith', time: '5 min ago', avatar: '👨‍💻' },
    { type: 'nft', user: 'You minted an NFT', time: '1 hour ago', avatar: '🎨' },
  ]

  return (
    <div className="px-6 pt-6 max-w-4xl mx-auto">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
            <p className="text-blue-100">
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect your wallet'}
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
              <div className="text-3xl flex-shrink-0">
                {activity.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.user}</p>
                <p className="text-gray-600 text-sm">{activity.time}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                activity.type === 'connection' ? 'bg-blue-500' :
                activity.type === 'nearby' ? 'bg-green-500' : 'bg-purple-500'
              }`} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}