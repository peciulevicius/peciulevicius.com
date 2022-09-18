import Head from 'next/head';
import { SimpleLayout } from '@/layouts/SimpleLayout';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Džiugas Pečiulevičius</title>
        <meta name="description" content="This page is under development..." />
      </Head>
      <SimpleLayout title="Blog" intro="This page is under development...">
        <div></div>
      </SimpleLayout>
    </>
  );
}
