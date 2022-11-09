import {
  HeroIllustration,
  HeroPatternLeft,
  HeroPatternRight
} from '@/components/Icons';
import { Header } from '@/components/Header';

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
        <div aria-hidden="true">
          <HeroPatternLeft className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2" />
          <HeroPatternRight className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2" />
        </div>

        <div className="relative">
          <Header />

          <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
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
              <HeroIllustration className={'mx-auto translate-y-16'} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
