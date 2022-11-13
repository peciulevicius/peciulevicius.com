import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoWhite from '@/images/logos/light-bg-transparent.svg';
import logoBlack from '@/images/logos/dark-bg-transparent.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '@/components/Button';
import Link from 'next/link';
import clsx from 'clsx';

const navigation = [
  { number: 1, name: 'Projects', href: '#' },
  { number: 2, name: 'Services', href: '#' },
  { number: 3, name: 'Tools', href: '#' },
  { number: 4, name: 'Contact', href: '#' }
];

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
            className={'h-12 w-auto sm:h-12'}
            priority
          />
        </>
      )}
    </Link>
  );
}

function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <Button
      type="button"
      variant={'secondary'}
      className={'ml-2 text-black dark:text-white'}
      size={'sm'}
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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  let closeButtonRef = useRef(null);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div
            className="-m-1.5 flex p-1.5 lg:min-w-0 lg:flex-1"
            aria-label="Global"
          >
            <span className="sr-only">Džiugas Pečiulevičius</span>
            <Logo />
          </div>
          <div className="flex lg:hidden">
            {/*MOBILE HAMBURGER*/}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 dark:text-slate-300 dark:focus:ring-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex font-semibold text-gray-900 dark:text-slate-300"
              >
                <span
                  className={'pr-2 font-bold text-sky-600 dark:text-sky-500'}
                >
                  0{item.number}.
                </span>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            {/*DESKTOP BUTTONS*/}
            <Button
              type={'button'}
              variant={'secondary'}
              size={'sm'}
              href={'#'}
            >
              Say hello
            </Button>
            <ToggleTheme />
          </div>
        </nav>

        {/*MOBILE DIALOG*/}
        <Dialog
          as="div"
          initialFocus={closeButtonRef}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 dark:bg-[#0B1120] lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="-m-1.5 flex p-1.5">
                <span className="sr-only">Džiugas Pečiulevičius</span>
                <Logo />
              </div>
              <div className="flex">
                <button
                  type="button"
                  ref={closeButtonRef}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-slate-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-100/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 dark:text-slate-300"
                    >
                      <span
                        className={
                          'pr-2 font-bold text-sky-600 dark:text-sky-500'
                        }
                      >
                        0{item.number}.
                      </span>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 dark:text-slate-300"
                  >
                    Say hello
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 focus:ring-black hover:bg-gray-400/10 dark:text-slate-300"
                    onClick={() =>
                      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    Switch to {resolvedTheme === 'dark' ? 'light' : 'dark'}{' '}
                    theme
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
}
