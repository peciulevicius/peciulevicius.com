import {
  HeroLinearGradientBottom,
  HeroLinearGradientTop
} from '@/components/Icons';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

export default function Hero() {
  return (
    <div className="isolate min-h-screen">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <HeroLinearGradientTop className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
      </div>
      <Header />
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Designer, Frontend & Mobile Developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-500 dark:text-slate-400 sm:text-center">
                I build new projects just to tickle my brain and I love creating
                UI effects, animations and intuitive, dynamic user experiences.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Button type={'button'} size={'lg'} href={'#'}>
                  Get started
                </Button>

                <Button
                  type={'button'}
                  size={'lg'}
                  href={'#'}
                  variant={'secondary'}
                >
                  Live demo
                </Button>
              </div>
              {/*<HeroIllustration className={'mx-auto translate-y-16'} />*/}
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <HeroLinearGradientBottom className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
