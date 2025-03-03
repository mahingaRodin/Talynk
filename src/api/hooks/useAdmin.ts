import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminService } from '../services';

// User management hooks
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: adminService.getAllUsers,
  });
};

export const useManageAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: adminService.manageAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

// Approver management hooks
export const useGetAllApprovers = () => {
  return useQuery({
    queryKey: ['approvers'],
    queryFn: adminService.getAllApprovers,
  });
};

export const useGetApproverById = (id: string) => {
  return useQuery({
    queryKey: ['approvers', id],
    queryFn: () => adminService.getApproverById(id),
    enabled: !!id, // Only run the query if id is provided
  });
};

export const useRegisterApprover = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: adminService.registerApprover,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['approvers'] });
    },
  });
};

export const useDeleteApprover = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: adminService.deleteApprover,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['approvers'] });
    },
  });
}; 