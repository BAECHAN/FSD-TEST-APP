import { counterAtom } from '@/shared/lib/recoil/store/atom';
import { Alert } from '@/shared/lib/shadcn-ui/components/ui';
import { CounterTestLayout } from '@/widgets/layout';
import { useRecoilState } from 'recoil';

export const MainPage = () => {
  const [count, setCount] = useRecoilState(counterAtom);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Main Page</h1>
      <Alert>ddd</Alert>
      <CounterTestLayout
        count={count}
        addCount={addCount}
        linkTo="/login"
        linkName="Login"
      />
    </div>
  );
};
