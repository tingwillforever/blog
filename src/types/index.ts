export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  draft: boolean;
  categories: string[];
  tags: string[];
  coverImage?: string;
  author: string;
  readTime: number;
  content: string;
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  count: number;
}

export interface Tag {
  name: string;
  slug: string;
  count: number;
}
