import { WrenchScrewdriverIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function UnderConstructionBanner() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-slate-900 p-2 shadow-lg dark:bg-sky-500 sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-slate-700 p-2 dark:bg-sky-600">
                    <WrenchScrewdriverIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 truncate font-medium text-white">
                    Page is under construction
                  </p>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    className="-mr-1 flex rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-slate-700 dark:hover:bg-sky-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
