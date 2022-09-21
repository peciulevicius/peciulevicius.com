import Head from 'next/head';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: This page could not be found - Džiugas Pečiulevičius</title>
        <meta
          name="description"
          content="404: Content that you're looking for is not found..."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-amber-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Button type="submit" href={'/'} className="ml-4 flex-none ">
                  Return home
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  href={'/blog'}
                  className="ml-4 flex-none "
                >
                  Read a blog
                </Button>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
}
