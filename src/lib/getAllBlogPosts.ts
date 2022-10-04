import glob from 'fast-glob';
import * as path from 'path';

async function importBlogPost(blogFilename: string) {
  let { meta, default: component } = await import(
    `../pages/blog/${blogFilename}`
  );

  return {
    slug: blogFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component
  };
}

export async function getAllBlogPosts() {
  let blogFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog')
  });

  let blogPosts = await Promise.all(blogFilenames.map(importBlogPost));

  return blogPosts.sort(
    (a, z) => new Date(z.date).valueOf() - new Date(a.date).valueOf()
  );
}
