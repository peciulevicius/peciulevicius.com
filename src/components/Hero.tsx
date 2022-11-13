import { Header } from '@/components/Header';
import { useEffect, useState } from 'react';
import { VersionControlBackground } from '@/components/Illustrations';
import { useTheme } from 'next-themes';
import { Button } from '@/components/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="isolate min-h-screen">
      <Header />

      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Designer, Frontend & Mobile Developer
            </h1>
            <p className="mt-6 pb-6 text-lg leading-8 text-slate-500 dark:text-slate-400 sm:text-center">
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

            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 -z-50 [mask-image:linear-gradient(transparent,white,red)] dark:[mask-image:linear-gradient(transparent,white,transparent)] sm:left-[calc(50%+14rem)] sm:right-0 sm:-top-32 sm:-bottom-32 sm:[mask-image:none] sm:dark:[mask-image:linear-gradient(white,white,transparent)]">
              {mounted && (
                <VersionControlBackground
                  color1={resolvedTheme === 'dark' ? '#FFF' : '#FFF'}
                  color2={resolvedTheme === 'dark' ? '#334155' : '#d5d5d5'}
                  color3={resolvedTheme === 'dark' ? '#1E293B' : '#F5F5F5'}
                  color4={resolvedTheme === 'dark' ? '#0EA5E9' : '#F472B6'}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
