import { Header } from '@/components/Header';
import { useEffect, useState } from 'react';
import { VersionControlBackground } from '@/components/Illustrations';
import { useTheme } from 'next-themes';
import { Button } from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="isolate min-h-screen">
      <Header />
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
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
                Primary
              </Button>
              <Button
                type={'button'}
                size={'lg'}
                href={'#'}
                variant={'secondary'}
              >
                Secondary
              </Button>
            </div>

            {/*<div className="absolute inset-x-[-50vw] -top-32 -bottom-48 -z-50 [mask-image:linear-gradient(transparent,white,transparent)] dark:[mask-image:linear-gradient(transparent,white,transparent)] sm:left-[calc(50%+14rem)] sm:right-0 sm:-top-32 sm:-bottom-32 sm:[mask-image:none] sm:dark:[mask-image:linear-gradient(transparent,white,transparent)]">*/}
            {/*  {mounted && (*/}
            {/*    <VersionControlBackground*/}
            {/*      color1={resolvedTheme === 'dark' ? '#FFF' : '#FFF'}*/}
            {/*      color2={resolvedTheme === 'dark' ? '#334155' : '#d5d5d5'}*/}
            {/*      color3={resolvedTheme === 'dark' ? '#1E293B' : '#F5F5F5'}*/}
            {/*      color4={resolvedTheme === 'dark' ? '#0EA5E9' : '#F472B6'}*/}
            {/*      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]"*/}
            {/*    />*/}
            {/*  )}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
