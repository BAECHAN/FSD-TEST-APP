import { LogoutButton } from '@/features/auth';
import { getBoardData } from '@/shared/api/auth';

export const MyPage = () => {
  const handleButtonClick = async () => {
    const response = await getBoardData();

    console.log(response);
  };
  return (
    <div>
      <h1>My Page</h1>
      <p>This is My Page.</p>

      <LogoutButton />
      <button onClick={handleButtonClick}>보드데이터가져오기 </button>
    </div>
  );
};
