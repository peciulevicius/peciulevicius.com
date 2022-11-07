import Head from 'next/head';
import Hero from '@/components/Hero';
import TestComponent from '@/components/TestComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Džiugas Pečiulevičius - Designer, Frontend & Mobile Developer
        </title>
        <meta
          name="description"
          content="I’m Džiugas, a designer, frontend and mobile developer."
        />
      </Head>
      <Hero />
      <TestComponent />
    </>
  );
}
