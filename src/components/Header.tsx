import { CSSProperties, Fragment, ReactNode, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import logoWhite from '@/images/logos/light-bg-transparent.svg';
import logoBlack from '@/images/logos/dark-bg-transparent.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '@/components/Button';
import Link from 'next/link';
import clsx from 'clsx';
import { CloseIcon } from '@/components/Icons';

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <Button
      type="button"
      variant={'secondary'}
      size={'md'}
      className={
        'h-full text-black hover:text-white dark:text-white dark:hover:text-black'
      }
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-5 w-5"
        >
          {resolvedTheme === 'dark' ? (
            // Sun icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            // Moon icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      )}
    </Button>
  );
}

function MobileNavItem({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props: { className: string }) {
  return (
    <Popover {...props}>
      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black hover:bg-gray-100 hover:text-gray-500 dark:bg-black dark:text-white dark:focus:ring-white">
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>

      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/blog">Blog</MobileNavItem>
                <MobileNavItem href="/guestbook">Guestbook</MobileNavItem>
                <MobileNavItem href="/snippets">Snippets</MobileNavItem>
                <MobileNavItem href="/gear">Gear</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function Logo({
  large = false,
  className,
  ...props
}: {
  large?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        className,
        'pointer-events-auto focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:focus:ring-white'
      )}
      {...props}
    >
      {mounted && (
        <>
          <span className="sr-only">Džiugas Pečiulevičius</span>
          <Image
            src={resolvedTheme === 'dark' ? logoWhite : logoBlack}
            alt="logo"
            className={'h-8 w-auto sm:h-12'}
            priority
          />
        </>
      )}
    </Link>
  );
}

export function Header() {
  return (
    <>
      <header className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Logo />

                  {/* MOBILE */}
                  <MobileNavigation className="-mr-2 flex items-center md:hidden" />
                </div>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span className="inline-flex rounded-md shadow">
                  <Button
                    className={'mr-2'}
                    type={'button'}
                    variant={'secondary'}
                    size={'md'}
                  >
                    Say Hello
                  </Button>
                </span>
                <ToggleTheme />
              </div>
            </nav>
          </div>
        </Popover>
      </header>
    </>
  );
}
