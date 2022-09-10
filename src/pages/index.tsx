import Head from 'next/head';
import { Container } from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import Resume from '@/components/Resume';

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
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, designer, and aspiring pilot.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Džiugas, a software engineer and designer based in Vilnius City.
            I build new projects just to tickle my brain and I love creating UI
            effects, animations and intuitive, dynamic user experiences.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
