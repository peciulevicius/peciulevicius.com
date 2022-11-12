import Head from 'next/head';
import Hero from '@/components/Hero';
import { LinearGradientBottom, LinearGradientTop } from '@/components/Icons';

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
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <LinearGradientTop className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <LinearGradientBottom className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
      </div>

      <Hero />
    </>
  );
}
