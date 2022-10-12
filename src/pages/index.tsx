import Head from 'next/head';
import Image from 'next/future/image';
import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons';
import { Container } from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import Resume from '@/components/Resume';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';
import clsx from 'clsx';
import { BlogPostModel } from '@/lib/types';
import { Card } from '@/components/Card';
import { formatDate } from '@/lib/formatDate';
import { getAllBlogPosts } from '@/lib/getAllBlogPosts';

function BlogPostCard({ blog }: { blog: BlogPostModel }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: {
  icon: any;
  href: string;
}): JSX.Element {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Photos(): JSX.Element {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2'
  ];

  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="scrollbar-thumb scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-500/[0.16] scrollbar-thumb-rounded-xl dark:scrollbar-track-slate-500/[0.16] dark:scrollbar-thumb-slate-500/50 -my-4 flex snap-x gap-5 overflow-x-auto px-5 py-4 pb-4 sm:snap-none sm:gap-8 lg:px-0 2xl:justify-center 2xl:overflow-hidden">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none snap-center overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home({ blogPosts }: { blogPosts: BlogPostModel[] }) {
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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, designer, and aspiring pilot.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Džiugas, a software engineer and designer based in Vilnius City.
            I build new projects just to tickle my brain and I love creating UI
            effects, animations and intuitive, dynamic user experiences.
          </p>
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

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogPosts.map((blog) => (
              <BlogPostCard key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: (await getAllBlogPosts())
        .slice(0, 2)
        .map(({ component, ...meta }) => meta)
    }
  };
}
