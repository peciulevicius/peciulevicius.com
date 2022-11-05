import Head from 'next/head';
import Hero from '@/components/Hero';

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
      <Hero />
    </>
  );
}
