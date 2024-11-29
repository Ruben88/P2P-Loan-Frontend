import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { QueryProvider } from '@/providers/query-provider';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'BorrowHub',
  description:
    "Peer-to-Peer (P2P) Microloan Platform that bridges the gap between borrower's and lenders",
  icons: [
    {
      url: '/icons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      url: '/icons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      url: '/icons/apple-touch-icon.png',
      sizes: '/blue-logo.svg',
    },
    {
      url: '/icons/android-chrome-512x512.png',
      sizes: '512x512',
    },
    {
      url: '/icons/android-chrome-192x192.png',
      sizes: '192x192',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Toaster
          toastOptions={{
            className:
              'w-96 h-16 text-xs bg-blue-900 text-white rounded-xl text-center flex justify-center items-center',
          }}
          position="top-center"
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
