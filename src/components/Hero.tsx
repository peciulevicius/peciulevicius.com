import { HeroPatternLeft, HeroPatternRight } from '@/components/Icons';
import { Header } from '@/components/Header';
import { useEffect } from 'react';
import { renderCanvas } from '@/components/renderCanvas';

export default function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-black">
        <div aria-hidden="true">
          <HeroPatternLeft />
          <HeroPatternRight />
        </div>

        <div className="relative">
          <Header />

          <main className="mx-auto mt-16 min-h-screen max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-black dark:text-white xl:inline">
                  Designer, Frontend & Mobile Developer
                </span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                I build new projects just to tickle my brain and I love creating
                UI effects, animations and intuitive, dynamic user experiences.
              </p>
            </div>
          </main>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </>
  );
}
