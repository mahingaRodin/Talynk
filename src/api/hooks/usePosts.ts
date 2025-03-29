import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

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
        console.log("Fetching posts from:", `${apiClient.defaults.baseURL}/api/post`);
        const response = await apiClient.get("/api/post");
        console.log("API Response:", response.data);
        // Ensure we always return an array
        const posts = Array.isArray(response.data.data) ? response.data.data : [];
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
        console.log("Fetching user posts from:", `${apiClient.defaults.baseURL}/api/post/user`);
        const response = await apiClient.get("/api/post/user");
        console.log("API Response:", response.data);
        // Ensure we always return an array
        const posts = Array.isArray(response.data.data) ? response.data.data : [];
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

      console.log("Creating post at:", `${apiClient.defaults.baseURL}/api/posts`);
      
      const response = await apiClient.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("Create post response:", response);
      return transformPost(response.data.data);
    },
  });
};

// Delete a post
export const useDeletePost = () => {
  return useMutation({
    mutationFn: async (postId: string) => {
      console.log("Deleting post at:", `${apiClient.defaults.baseURL}/api/post/${postId}`);
      await apiClient.delete(`/api/post/${postId}`);
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
        console.log("Searching posts at:", `${apiClient.defaults.baseURL}/api/post/search?q=${query}`);
        const response = await apiClient.get(`/api/post/search?q=${query}`);
        console.log("Search response:", response.data);
        // Ensure we always return an array
        const posts = Array.isArray(response.data.data) ? response.data.data : [];
        return posts.map(transformPost);
      } catch (error) {
        console.error("Error searching posts:", error);
        return [];
      }
    },
    enabled: !!query,
  });
}; 