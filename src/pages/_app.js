import { NextUIProvider } from '@nextui-org/react';
import { Orbitron } from 'next/font/google';
import '@/styles/globals.css';
import AuthProvider from '@/context/AuthProvider';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <div className={orbitron.className}>
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </NextUIProvider>
  );
}
