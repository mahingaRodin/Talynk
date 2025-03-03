import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

const ExplorePage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "John Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      image: "/placeholder.svg?height=400&width=400",
      likes: 2410,
      shares: 2410,
      caption: "Some caption text",
      comments: 101,
      timeAgo: "2 min ago",
    },
    // Add more posts as needed
  ]);

  return (
    <div className="flex-1 overflow-auto">
      {/* Search Bar */}
      <div className="p-4 sticky top-0 bg-black/90 backdrop-blur-sm z-10">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="search"
            placeholder="Search anything"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
