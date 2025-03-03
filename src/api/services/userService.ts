import apiClient from '../apiClient';

interface Post {
  id: string;
  title: string;
  caption: string;
  post_category: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface Profile {
  id: string;
  username: string;
  email: string;
  phone1?: string;
  phone2?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProfileUpdateRequest {
  username?: string;
  phone1?: string;
  phone2?: string;
}

interface Search {
  id: string;
  searchTerm: string;
  userId: string;
  createdAt: string;
}

export const userService = {
  // Post management
  createPost: async (formData: FormData): Promise<Post> => {
    const response = await apiClient.post<Post>('/api/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deletePost: async (postId: string): Promise<void> => {
    await apiClient.delete(`/api/posts/${postId}`);
  },

  getPosts: async (): Promise<Post[]> => {
    const response = await apiClient.get<Post[]>('/api/posts');
    return response.data;
  },

  // Profile management
  getProfile: async (): Promise<Profile> => {
    const response = await apiClient.get<Profile>('/api/profile');
    return response.data;
  },

  updateProfile: async (data: ProfileUpdateRequest): Promise<Profile> => {
    const response = await apiClient.put<Profile>('/api/profile', data);
    return response.data;
  },

  // Search management
  getRecentSearches: async (): Promise<Search[]> => {
    const response = await apiClient.get<Search[]>('/api/user/searches');
    return response.data;
  },

  addSearch: async (searchTerm: string): Promise<Search> => {
    const response = await apiClient.post<Search>('/api/user/searches', { searchTerm });
    return response.data;
  },
}; 