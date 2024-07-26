import { User } from '@/entities/user';
import { useUserListQuery } from '@/widgets/UserCardList';
import UserCardListContent from '@/widgets/UserCardList/ui/UserCardListContent';
import { UserCardListToggleButton } from '@/widgets/UserCardList/ui/UserCardListToggleButton';
import { UseQueryResult } from '@tanstack/react-query';
import { useState } from 'react';

const UserCardListLayout = () => {
  const [active, setActive] = useState<boolean>(false);

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
    <div className="flex justify-center flex-col gap-4">
      <UserCardListToggleButton
        isActive={active}
        onClick={() => setActive(prev => !prev)}
      />
      {active && <UserCardListContent />}
    </div>
  );
};

export default UserCardListLayout;
