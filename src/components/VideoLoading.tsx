import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface VideoLoadingProps {
  onVideoComplete: () => void
}

export const VideoLoading: React.FC<VideoLoadingProps> = ({ onVideoComplete }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
      })
      
      videoRef.current.addEventListener('ended', () => {
        setTimeout(onVideoComplete, 500)
      })
    }
  }, [onVideoComplete])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {!videoLoaded && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
          <p className="text-white text-lg">Loading experience...</p>
        </div>
      )}
      
      <video
        ref={videoRef}
        src="https://series.so/loading_screen.mp4"
        autoPlay
        muted
        className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        playsInline
      />
      
      {videoLoaded && (
        <button
          onClick={onVideoComplete}
          className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
        >
          Skip
        </button>
      )}
    </motion.div>
  )
}