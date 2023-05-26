import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import UnderConstructionBanner from '@/components/UnderConstructionBanner';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider attribute="class">
        <div className="relative overflow-hidden selection:bg-pink-200 selection:text-pink-900 dark:selection:bg-sky-300 dark:selection:text-sky-900">
          {router.pathname !== '/' && <Header />}
          <main>
            <Component {...pageProps} />
            <Analytics />
          </main>
          {/*<UnderConstructionBanner />*/}
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
