import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import GoogleTagManager from '@/components/googletagmanager';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  );
}
