import { ReactNode } from 'react';

export type ResumeModel = {
  company: string;
  title: string;
  logo: string;
  start: string;
  end: string;
};

export type BlogPostModel = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// === component props ====

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
};

export type ContainerProps = {
  className?: string;
  children: any;
};

export type SimpleLayoutProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export type NavLinkProps = {
  href: string;
  children: string;
};
