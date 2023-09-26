import AuthLayout1 from '@/components/layout/auth/AuthLayout1';

interface ILayoutForgetPassword {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutForgetPassword) {
  return (
    <main>
      <AuthLayout1>{children}</AuthLayout1>
    </main>
  );
}
