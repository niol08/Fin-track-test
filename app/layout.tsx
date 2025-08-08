import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from './context/SidebarContext';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FinTrack',
  description: 'A financial tracking application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${publicSans.variable} font-sans bg-app-background px-5 md:px-12 text-app-text antialiased`}
        style={{ fontFamily: 'var(--font-public-sans), sans-serif' }}
        suppressHydrationWarning={true}
      >
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
