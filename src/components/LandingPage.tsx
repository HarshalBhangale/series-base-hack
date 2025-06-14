import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Users, Shield, Globe, ArrowRight, Star, Zap, Heart } from 'lucide-react'

interface LandingPageProps {
  onJoinUs: () => void
}

export const LandingPage: React.FC<LandingPageProps> = ({ onJoinUs }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg opacity-80"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg opacity-70"
      />
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-lg opacity-60"
      />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 px-6 py-8"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Proximal.wtf
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Sign In
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Join 10,000+ early adopters</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight"
            >
              Connect Beyond
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
                Boundaries
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 -z-10 rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Experience the future of social networking with blockchain-powered connections, 
              exclusive NFT memberships, and location-based community building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                onClick={onJoinUs}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="text-lg">Join Us Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 text-gray-700 font-semibold border-2 border-gray-300 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3"
              >
                <span className="text-lg">Watch Demo</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <div className="w-0 h-0 border-l-[6px] border-l-gray-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-8 mb-20"
            >
              {[
                { number: "10K+", label: "Active Users" },
                { number: "50K+", label: "NFTs Minted" },
                { number: "100+", label: "Communities" },
                { number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: Users,
                title: "Social Discovery",
                description: "Find and connect with like-minded people within your local community using advanced proximity algorithms.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: Zap,
                title: "NFT Membership",
                description: "Mint exclusive NFTs on Base Sepolia that unlock premium features and represent your unique digital identity.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                icon: Shield,
                title: "Decentralized Security",
                description: "Built on blockchain technology ensuring maximum security, privacy, and complete ownership of your data.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-32 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Join the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Be part of the next generation of social networking. Connect, create, and collect in ways never before possible.
                </p>
                <motion.button
                  onClick={onJoinUs}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-12 py-6 bg-white text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  <span className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}