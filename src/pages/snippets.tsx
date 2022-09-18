import Image from 'next/future/image';
import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/layouts/SimpleLayout';
import logoVisma from '@/images/logos/visma.svg';

const snippets = [
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    logo: logoVisma
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    logo: logoVisma
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    logo: logoVisma
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    logo: logoVisma
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    logo: logoVisma
  }
];

export default function Snippets() {
  return (
    <>
      <Head>
        <title>Code Snippets - Džiugas Pečiulevičius</title>
        <meta
          name="description"
          content="These are a collection of code snippets I've used in the past and saved."
        />
      </Head>
      <SimpleLayout
        title="Code Snippets"
        intro="These are a collection of code snippets I've used in the past and saved. Anything from random CSS snippets to Node.js scripts."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {snippets.map((snippet) => (
            <Card as="li" key={snippet.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={snippet.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={snippet.name}>{snippet.name}</Card.Link>
              </h2>
              <Card.Description>{snippet.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
