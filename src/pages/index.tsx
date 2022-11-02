import Head from 'next/head';
import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';
import { Container } from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import Resume from '@/components/Resume';
import Hero from '@/components/Hero';

function SocialLink({
  icon: Icon,
  ...props
}: {
  // todo: fix 'any' type
  icon: any;
  href: string;
}): JSX.Element {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Džiugas Pečiulevičius - Software engineer, designer, and aspiring
          pilot
        </title>
        <meta
          name="description"
          content="I’m Džiugas, a software engineer, designer, and aspiring pilot based in Vilnius City."
        />
      </Head>
      <Hero />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/dpeciulevicius"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/peciulevicius"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/peciulevicius"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
