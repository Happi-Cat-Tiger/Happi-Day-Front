import { Metadata } from 'next';
import RecoilRootWrapper from '../utils/RecoilRootWrapper';
import ReactQueryWrapper from '@/utils/ReactQueryWrapper';
import '../styles/global.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Happi Day',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <RecoilRootWrapper>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </RecoilRootWrapper>
        <Footer />
      </body>
    </html>
  );
}
