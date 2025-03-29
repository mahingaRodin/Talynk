"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  user: {
    name: string;
    username: string;
    profile_picture: string;
  };
  likes: number;
  comments: number;
  shares: number;
  status: string;
  category: {
    name: string;
  };
}

interface Video {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  videoUrl: string;
  caption: string;
  hashtags: string[];
  likes: string;
  comments: string;
  shares: string;
}

const HomePage: React.FC = () => {
  // Fetch posts using React Query
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        console.log(
          "Fetching posts from:",
          `${import.meta.env.VITE_API_URL}/api/post/user`
        );
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/post/user`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log("API Response:", response.data);

        // Ensure we always return an array, even if empty
        if (!response.data || !response.data.data) {
          console.log("No data in response:", response.data);
          return [];
        }

        return response.data.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Return empty array on error instead of throwing
        return [];
      }
    },
    // Add some options to handle the data better
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2, // Retry failed requests twice
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });

  // Transform posts to match the Video interface
  const videos: Video[] =
    posts?.map((post: Post) => ({
      id: post.id,
      user: {
        name: post.user?.name || post.user?.username || "Anonymous",
        avatar: post.user?.profile_picture || "/placeholder.svg",
      },
      videoUrl: post.videoUrl || "",
      caption: post.description || "",
      hashtags: [post.category?.name || "uncategorized"],
      likes: (post.likes || 0).toString(),
      comments: (post.comments || 0).toString(),
      shares: (post.shares || 0).toString(),
    })) || [];

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-red-500">
          Error loading posts. Please try again later.
        </div>
      </div>
    );
  }

  if (!videos.length) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500">No posts available.</div>
      </div>
    );
  }

  return (
    <div className="h-full snap-y snap-mandatory overflow-y-scroll">
      {videos.map((video, index) => (
        <div key={video.id} className="h-full snap-start relative">
          <div className="absolute inset-0 bg-gray-900">
            <video
              src={video.videoUrl}
              className="w-full h-full object-cover"
              controls
              loop
              playsInline
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
                src={video.user.avatar}
                alt={video.user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{video.user.name}</span>
            </div>
            <p className="mb-2">{video.caption}</p>
            <div className="flex flex-wrap gap-2">
              {video.hashtags.map((tag: string) => (
                <span key={tag} className="text-sm text-blue-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
