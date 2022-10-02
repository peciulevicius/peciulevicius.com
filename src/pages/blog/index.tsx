import Head from 'next/head';
import { SimpleLayout } from '@/layouts/SimpleLayout';
import { getAllBlogPosts } from '@/lib/getAllBlogPosts';
import { Card } from '@/components/Card';
import { formatDate } from '@/lib/formatDate';
import { BlogPostModel } from '@/lib/types';

function BlogPost(blog: { blog: BlogPostModel }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function Blog({ blogPosts }: { blogPosts: BlogPostModel[] }) {
  return (
    <>
      <Head>
        <title>Blog - Džiugas Pečiulevičius</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Blog"
        intro="All of my long-form thoughts on programming, product design, and more, collected in chronological order. Use the search below to filter by title."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {blogPosts.map((blog) => (
              <BlogPost key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: (await getAllBlogPosts()).map(({ component, ...meta }) => meta)
    }
  };
}
