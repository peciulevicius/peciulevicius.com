import Image from 'next/image';
import Head from 'next/head';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/layouts/SimpleLayout';
import { getAllCodeSnippets } from '@/lib/getAllCodeSnippets';
import { CodeSnippetModel } from '@/lib/types';
import { InferGetStaticPropsType } from 'next';

function SnippetCard({ snippet }: { snippet: CodeSnippetModel }) {
  return (
    <Card as="li">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={snippet.logo}
          alt=""
          className="h-8 w-8"
          width={200}
          height={200}
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/snippets/${snippet.slug}`}>
          {snippet.title}
        </Card.Link>
      </h2>
      <Card.Description>{snippet.description}</Card.Description>
    </Card>
  );
}

export default function Snippets(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
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
          {props.snippets.map((snippet) => (
            <SnippetCard key={snippet.slug} snippet={snippet} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      snippets: (await getAllCodeSnippets()).map(
        ({ component, ...meta }) => meta
      )
    }
  };
}
