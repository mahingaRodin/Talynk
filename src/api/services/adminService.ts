import apiClient from '../apiClient';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface Approver {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface ApproverRequest {
  username: string;
  email: string;
  password: string;
}

export const adminService = {
  // User management
  getAllUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/api/admin/users');
    return response.data;
  },

  manageAccount: async (data: any): Promise<any> => {
    const response = await apiClient.post('/api/admin/accounts/manage', data);
    return response.data;
  },

  // Approver management
  getAllApprovers: async (): Promise<Approver[]> => {
    const response = await apiClient.get<Approver[]>('/api/admin/approvers');
    return response.data;
  },

  getApproverById: async (id: string): Promise<Approver> => {
    const response = await apiClient.get<Approver>(`/api/admin/approvers/${id}`);
    return response.data;
  },

  registerApprover: async (data: ApproverRequest): Promise<Approver> => {
    const response = await apiClient.post<Approver>('/api/admin/approvers', data);
    return response.data;
  },

  deleteApprover: async (username: string): Promise<void> => {
    await apiClient.delete(`/api/admin/approvers/${username}`);
  },
}; 