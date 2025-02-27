import Head from 'next/head';
import { Container } from '@/components/Container';
import { formatDate } from '@/lib/formatDate';
import { Prose } from '@/components/Prose';

// todo: fix 'any' type
export function BlogPostLayout({ children, meta, isRssFeed = false }: any) {
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
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
