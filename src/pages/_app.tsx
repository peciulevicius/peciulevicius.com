import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider attribute="class">
        <div className="relative">
          {router.pathname !== '/' && <Header />}
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
