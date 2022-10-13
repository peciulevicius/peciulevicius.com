import { ReactElement } from 'react';

export type ContainerProps = {
  className?: string;
  children: ReactElement | ReactElement[];
};

export type BlogPostModel = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type CodeSnippetModel = {
  slug: string;
  title: string;
  description: string;
  logo: string;
};
