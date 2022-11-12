import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

export default function Hero() {
  return (
    <div className="isolate min-h-screen">
      <Header />

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
          </div>
        </div>
      </div>
    </div>
  );
}
