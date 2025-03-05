import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  caption: string;
  post_category: string;
  file_url: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  likes: number;
  shares: number;
  comments: number;
  created_at: string;
  status: "pending" | "approved";
}

interface CreatePostData {
  file: File;
  title: string;
  caption: string;
  post_category: string;
}

// Transform raw API data to match our Post interface
const transformPost = (data: any): Post => ({
  id: data.id || "",
  title: data.title || "",
  caption: data.caption || "",
  post_category: data.post_category || "",
  file_url: data.file_url || "",
  user: {
    name: data.user?.name || "Anonymous",
    username: data.user?.username || "anonymous",
    avatar: data.user?.avatar || "/placeholder.svg",
  },
  likes: data.likes || 0,
  shares: data.shares || 0,
  comments: data.comments || 0,
  created_at: data.created_at || new Date().toISOString(),
  status: data.status || "pending",
});

// Fetch all posts (for explore page)
export const useAllPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/posts");
        // Ensure we always return an array
        const posts = Array.isArray(response.data) ? response.data : [];
        return posts.map(transformPost);
      } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
    },
  });
};

// Fetch user's posts (for profile page)
export const useUserPosts = () => {
  return useQuery({
    queryKey: ["userPosts"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/posts/user");
        // Ensure we always return an array
        const posts = Array.isArray(response.data) ? response.data : [];
        return posts.map(transformPost);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        return [];
      }
    },
  });
};

// Create a new post
export const useCreatePost = () => {
  return useMutation({
    mutationFn: async (data: CreatePostData) => {
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("title", data.title);
      formData.append("caption", data.caption);
      formData.append("post_category", data.post_category);

      const response = await axios.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return transformPost(response.data);
    },
  });
};

// Delete a post
export const useDeletePost = () => {
  return useMutation({
    mutationFn: async (postId: string) => {
      await axios.delete(`/api/posts/${postId}`);
      return postId;
    },
  });
};

// Search posts
export const useSearchPosts = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/posts/search?q=${query}`);
        // Ensure we always return an array
        const posts = Array.isArray(response.data) ? response.data : [];
        return posts.map(transformPost);
      } catch (error) {
        console.error("Error searching posts:", error);
        return [];
      }
    },
    enabled: !!query,
  });
}; 