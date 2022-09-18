import Head from 'next/head';
import { SimpleLayout } from '@/layouts/SimpleLayout';

export default function Guestbook() {
  return (
    <>
      <Head>
        <title>Guestbook - Džiugas Pečiulevičius</title>
        <meta name="description" content="This page is under development..." />
      </Head>
      <SimpleLayout title="Guestbook" intro="This page is under development...">
        <div></div>
      </SimpleLayout>
    </>
  );
}
