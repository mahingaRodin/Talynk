import type React from "react";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("approved");

  const posts = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      status: "approved",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      status: "pending",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      status: "approved",
    },
    // Add more posts as needed
  ];

  const handleDeletePost = (postId: number) => {
    console.log("Deleting post:", postId);
    // Implement delete functionality here
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile Picture"
            className="w-25 h-25 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">John Doe</h1>
            <p className="text-gray-400">@johndoe</p>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Edit Profile
        </button>
      </div>

      <div className="mb-8">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "approved"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("approved")}
          >
            Approved Posts
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "pending"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Posts
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts
            .filter((post) => post.status === activeTab)
            .map((post) => (
              <div key={post.id} className="relative group">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="text-white"
                  >
                    <MoreHorizontal className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
