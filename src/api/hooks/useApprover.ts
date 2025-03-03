import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { approverService } from '../services';

// Post management hooks
export const useGetPendingPosts = () => {
  return useQuery({
    queryKey: ['posts', 'pending'],
    queryFn: approverService.getPendingPosts,
  });
};

export const useApprovePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: approverService.approvePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', 'pending'] });
    },
  });
};

// Report management hooks
export const useGenerateReport = () => {
  return useMutation({
    mutationFn: approverService.generateReport,
  });
};