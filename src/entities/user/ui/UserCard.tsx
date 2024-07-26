import { User } from '@/entities/user/type/UserType';

const UserCard = (user: User) => {
  const { id, name, age, email } = user;

  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{email}</h4>
    </div>
  );
};
export default UserCard;
