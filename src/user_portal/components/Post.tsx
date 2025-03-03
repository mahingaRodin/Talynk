"use client";

import type React from "react";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface PostProps {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo?: string;
}

const Post: React.FC<PostProps> = ({
  user,
  image,
  caption,
  likes,
  comments,
  shares,
  timeAgo,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically update the like count on the server
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Here you would typically save/unsave the post on the server
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {/* Post Image */}
      <img
        src={image}
        alt={caption}
        className="w-full aspect-square object-cover"
      />

      {/* Post Info */}
      <div className="p-4">
        {/* User Info */}
        <div className="flex items-center space-x-2 mb-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium text-white">{user.name}</span>
          {timeAgo && (
            <span className="text-gray-400 text-sm">• {timeAgo}</span>
          )}
        </div>

        {/* Caption */}
        <p className="text-white mb-4">{caption}</p>

        {/* Interaction Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500">
              <MessageCircle className="h-5 w-5" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-green-500">
              <Share2 className="h-5 w-5" />
              <span>{shares}</span>
            </button>
          </div>
          <button className="text-gray-400 hover:text-yellow-500">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
