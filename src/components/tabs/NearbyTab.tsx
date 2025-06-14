import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Users, Navigation } from 'lucide-react'
import { useGeolocation } from '../../hooks/useGeolocation'

interface NearbyUser {
  id: string
  name: string
  avatar: string
  distance: number
  lastSeen: string
  interests: string[]
}

export const NearbyTab: React.FC = () => {
  const { latitude, longitude, error, loading } = useGeolocation()
  const [nearbyUsers, setNearbyUsers] = useState<NearbyUser[]>([])

  // Mock data for demonstration
  useEffect(() => {
    if (latitude && longitude) {
      // Simulate fetching nearby users
      setTimeout(() => {
        setNearbyUsers([
          {
            id: '1',
            name: 'Sarah Chen',
            avatar: '👩‍🎨',
            distance: 0.3,
            lastSeen: '5 min ago',
            interests: ['Art', 'NFTs', 'Photography']
          },
          {
            id: '2',
            name: 'Mike Rodriguez',
            avatar: '👨‍💻',
            distance: 0.7,
            lastSeen: '12 min ago',
            interests: ['Tech', 'Crypto', 'Gaming']
          },
          {
            id: '3',
            name: 'Emily Watson',
            avatar: '👩‍🚀',
            distance: 0.9,
            lastSeen: '1 hour ago',
            interests: ['Space', 'Science', 'Books']
          },
        ])
      }, 1000)
    }
  }, [latitude, longitude])

  if (loading) {
    return (
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Getting your location...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
          <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Access Needed</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
            Enable Location
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 pt-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">People Nearby</h1>
            <p className="text-green-100">Within 1km radius</p>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 rounded-xl px-3 py-2">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{nearbyUsers.length}</span>
          </div>
        </div>
      </div>

      {/* Nearby Users List */}
      <div className="space-y-4">
        {nearbyUsers.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl flex-shrink-0">
                  {user.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{user.distance}km away</span>
                    <span>•</span>
                    <span>{user.lastSeen}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                Connect
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {user.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {nearbyUsers.length === 0 && !loading && (
        <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No one nearby</h3>
          <p className="text-gray-600">Check back later or expand your search radius</p>
        </div>
      )}
    </div>
  )
}