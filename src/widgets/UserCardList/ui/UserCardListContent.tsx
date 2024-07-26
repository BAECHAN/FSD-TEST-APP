import { User } from '@/entities/user';
import { useUserListQuery } from '@/widgets/UserCardList';
import { UseQueryResult } from '@tanstack/react-query';

const UserCardListContent = () => {
  const { data, error, isLoading }: UseQueryResult<User[], Error> =
    useUserListQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data...</div>;
  }

  return (
    <div className="flex justify-center gap-4">
      {data.map(user => {
        const { id, name, age, email } = user;

        return (
          <div key={id}>
            <strong>{name}</strong>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserCardListContent;
