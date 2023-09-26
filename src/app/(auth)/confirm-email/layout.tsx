import AuthLayout3 from '@/components/layout/auth/AuthLayout3';

interface ILayoutForgetPassword {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutForgetPassword) {
  return (
    <main>
      <AuthLayout3>{children}</AuthLayout3>
    </main>
  );
}
