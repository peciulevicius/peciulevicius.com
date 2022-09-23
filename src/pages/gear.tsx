import Head from 'next/head';
import { SimpleLayout } from '@/layouts/SimpleLayout';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

function ToolsSection({ children, ...props }: any) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }: any) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Gear() {
  return (
    <>
      <Head>
        <title>Gear - Džiugas Pečiulevičius</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout title="Gear" intro="This page is under development...">
        <div></div>
      </SimpleLayout>
    </>
  );
}
