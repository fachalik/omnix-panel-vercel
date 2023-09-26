import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import TanstackQueryProvider from '@/lib/TanstackQueryProvider';
import { StyledComponentsRegistry, AntdProvider } from '@/lib/AntdRegistry';
import GoogleProvider from '@/lib/GoogleProvider';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Omnix Panel',
  description: 'Omnix Panel',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={jakartaSans.className}>
        <GoogleProvider>
          <TanstackQueryProvider>
            <StyledComponentsRegistry>
              <AntdProvider>{children}</AntdProvider>
            </StyledComponentsRegistry>
          </TanstackQueryProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}
