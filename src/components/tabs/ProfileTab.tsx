import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAccount, useDisconnect } from 'wagmi'
import { Upload, Edit, LogOut, Wallet, Camera } from 'lucide-react'

export const ProfileTab: React.FC = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    phone: '',
    location: 'New York, NY'
  })
  const [characterCount, setCharacterCount] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
    if (field === 'bio') {
      setCharacterCount(value.length)
    }
  }

  return (
    <div className="px-6 pt-6 max-w-4xl mx-auto pb-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-6"
      >
        {/* Photo Upload Section */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mx-auto flex items-center justify-center relative overflow-hidden">
            <Camera className="w-12 h-12 text-gray-400" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <Upload className="w-8 h-8 text-white" />
            </div>
          </div>
          <button className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 bg-white border-4 border-white rounded-2xl px-4 py-2 shadow-lg hover:shadow-xl transition-shadow">
            <Upload className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <input
              type="text"
              placeholder="First name"
              value={profile.firstName}
              onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              value={profile.lastName}
              onChange={(e) => handleProfileUpdate('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Me</h3>
          <textarea
            placeholder="Who are you? (30-100 characters)"
            value={profile.bio}
            onChange={(e) => handleProfileUpdate('bio', e.target.value)}
            maxLength={100}
            className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-24"
          />
          <div className="flex justify-end mt-2">
            <span className={`text-sm ${characterCount > 30 ? 'text-green-500' : 'text-red-500'}`}>
              {characterCount}/30 characters
            </span>
          </div>
        </div>

        {/* Private Info Section */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-600 text-sm mb-4">The following won't be shown on your profile.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="(999) 999 - 9999"
                value={profile.phone}
                onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="New York, NY"
                value={profile.location}
                onChange={(e) => handleProfileUpdate('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wallet Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Connected Wallet</h3>
              <p className="text-gray-600 text-sm">
                {address ? `${address.slice(0, 10)}...${address.slice(-8)}` : 'Not connected'}
              </p>
            </div>
          </div>
          {address && (
            <button
              onClick={() => disconnect()}
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Disconnect</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Save Profile
      </motion.button>
    </div>
  )
}