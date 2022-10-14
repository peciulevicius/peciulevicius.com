import Head from 'next/head';
import Image from 'next/future/image';
import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';

// todo: fix 'any' type
export function CodeSnippetsLayout({ children, meta, isRssFeed = false }: any) {
  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Džiugas Pečiulevičius`}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <div className="flex justify-between">
                <header className="max-w-lg">
                  <h1 className="mr-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {meta.title}
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {meta.description}
                  </p>
                </header>
                <div className="mt-2">
                  <Image
                    alt="logo"
                    height={60}
                    width={60}
                    src={meta.logo}
                    className="rounded-full"
                  />
                </div>
              </div>

              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
