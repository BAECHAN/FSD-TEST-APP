import { Accordion, Badge } from '@/shared/lib/shadcn-ui/components/ui';
import { LoginFormLayout } from '@/widgets/layout';

export const LoginPage = () => {
  return (
    <div>
      <h1 className="flex justify-center">Login Page</h1>
      <Badge>Primary</Badge>
      <Accordion></Accordion>
      <LoginFormLayout />
    </div>
  );
};
