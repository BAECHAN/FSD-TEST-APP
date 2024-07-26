import { User } from '@/entities/user';
import { getUserList } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

const queryKey: string = 'userList';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await getUserList();
  return data;
};

const useUserListQuery = () => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchUsers(),
  });
};

export default useUserListQuery;
