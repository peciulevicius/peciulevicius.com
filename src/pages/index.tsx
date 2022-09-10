import Head from 'next/head';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Džiugas Pečiulevičius - Software engineer, designer, and aspiring
          pilot
        </title>
        <meta
          name="description"
          content="I’m Džiugas, a software engineer, designer, and aspiring pilot based in Vilnius City."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-amber-500 text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, designer, and aspiring pilot.
          </h1>
        </div>
      </Container>
    </>
  );
}
