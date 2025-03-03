"use client"

import type React from "react"
import { useState } from "react"
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react"

interface Video {
  id: number
  user: {
    name: string
    avatar: string
  }
  videoUrl: string
  caption: string
  hashtags: string[]
  likes: string
  comments: string
  shares: string
}

const HomePage: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos: Video[] = [
    {
      id: 1,
      user: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      videoUrl: "/placeholder.svg?height=800&width=450",
      caption: "Some Caption Text",
      hashtags: ["foryou", "talent", "guitar"],
      likes: "115k",
      comments: "60k",
      shares: "32k",
    },
    // Add more video data as needed
  ]

  return (
    <div className="h-full snap-y snap-mandatory overflow-y-scroll">
      {videos.map((video, index) => (
        <div key={video.id} className="h-full snap-start relative">
          <div className="absolute inset-0 bg-gray-900">
            <img
              src={video.videoUrl || "/placeholder.svg"}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video Controls */}
          <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
            <button className="p-2 text-white hover:text-blue-500">
              <Heart className="h-8 w-8" />
              <span className="text-sm">{video.likes}</span>
            </button>
            <button className="p-2 text-white hover:text-blue-500">
              <MessageCircle className="h-8 w-8" />
              <span className="text-sm">{video.comments}</span>
            </button>
            <button className="p-2 text-white hover:text-blue-500">
              <Share2 className="h-8 w-8" />
              <span className="text-sm">{video.shares}</span>
            </button>
            <button className="p-2 text-white hover:text-blue-500">
              <Bookmark className="h-8 w-8" />
            </button>
          </div>

          {/* Video Info */}
          <div className="absolute bottom-4 left-4 right-16 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={video.user.avatar || "/placeholder.svg"}
                alt={video.user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{video.user.name}</span>
            </div>
            <p className="mb-2">{video.caption}</p>
            <div className="flex flex-wrap gap-2">
              {video.hashtags.map((tag) => (
                <span key={tag} className="text-sm text-blue-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage

