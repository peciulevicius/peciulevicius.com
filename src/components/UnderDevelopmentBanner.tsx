import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

export default function UnderDevelopmentBanner() {
  return (
    <div className="flex justify-center gap-x-6 bg-black px-6 py-2.5 dark:bg-white sm:px-3.5">
      <WrenchScrewdriverIcon
        className="h-5 w-5 text-white dark:text-black"
        aria-hidden="true"
      />
      <p className="text-sm leading-6 text-white dark:text-black">
        <strong className="font-semibold">Under development</strong>
      </p>
      <WrenchScrewdriverIcon
        className="h-5 w-5 text-white dark:text-black"
        aria-hidden="true"
      />
    </div>
  );
}
