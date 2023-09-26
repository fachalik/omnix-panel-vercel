import AuthLayout2 from '@/components/layout/auth/AuthLayout2';

interface ILayoutForgetPassword {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutForgetPassword) {
  return (
    <main>
      <AuthLayout2>{children}</AuthLayout2>
    </main>
  );
}
