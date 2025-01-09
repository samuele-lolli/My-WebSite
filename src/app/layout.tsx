import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Samuele Lolli | Portfolio',
  description: 'Portfolio personale di Samuele Lolli',
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    
    <html lang="en">
      <body className="bg-black text-neon">{children}</body>
    </html>
  );
}
