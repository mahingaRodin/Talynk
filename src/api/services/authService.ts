import apiClient from '../apiClient';

interface LoginRequest {
  email: string;
  password: string;
  role: string;
  username?: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface AuthResponse {
  status: string;
  data: {
    refreshToken: string;
    accessToken : string 
    user: {
      id: string;
      email: string;
      username: string;
      role: string;
    };
  };
}

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/api/auth/login', data);
    if (response.data.status === 'success') {
      // Store tokens in localStorage
      console.log("login response -->", response)
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/api/auth/register', data);
    if (response.data.status === 'success') {
      console.log("Registration successful, redirecting to login...");
    }
    return response.data;
  },

  refreshToken: async (): Promise<{ token: string }> => {
    const response = await apiClient.get<{ token: string }>('/api/auth/refresh-token');
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
}; 