import type React from "react";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: number;
  type: "user" | "post";
  name?: string;
  username?: string;
  avatar?: string;
  image?: string;
  caption?: string;
}

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([
    {
      id: 1,
      type: "user",
      name: "John Doe",
      username: "@johndoe",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      type: "post",
      image: "/placeholder.svg?height=200&width=200",
      caption: "Amazing talent!",
    },
    {
      id: 3,
      type: "user",
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    // Add more mock results as needed
  ]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Implement actual search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for talents, posts, or hashtags"
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </form>

      <div className="space-y-4">
        {searchResults.map((result) => (
          <div key={result.id} className="bg-gray-900 p-4 rounded-lg">
            {result.type === "user" ? (
              <div className="flex items-center space-x-4">
                <img
                  src={result.avatar || "/placeholder.svg"}
                  alt={result.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-white font-medium">{result.name}</h3>
                  <p className="text-gray-400">{result.username}</p>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src={result.image || "/placeholder.svg"}
                  alt="Post"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-white">{result.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
