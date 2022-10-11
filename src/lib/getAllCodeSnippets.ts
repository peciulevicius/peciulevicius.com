import glob from 'fast-glob';
import * as path from 'path';

async function importCodeSnippet(snippetFilename: string) {
  let { meta, default: component } = await import(
    `../pages/snippets/${snippetFilename}`
  );

  return {
    slug: snippetFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component
  };
}

export async function getAllCodeSnippets() {
  let codeSnippetFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/snippets')
  });

  return await Promise.all(codeSnippetFilenames.map(importCodeSnippet));
}
