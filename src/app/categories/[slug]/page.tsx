import { getPostsByCategory, getCategories } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { ChevronLeft, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: '分类未找到',
    };
  }

  return {
    title: `${category.name} - 分类`,
    description: `浏览 "${category.name}" 分类下的所有文章`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const posts = getPostsByCategory(slug);
  const categories = getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="container max-w-screen-md py-10">
      <Link
        href="/categories"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        返回分类列表
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FolderOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          共 {posts.length} 篇文章
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="flex flex-col space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">该分类下还没有文章</p>
        </div>
      )}
    </div>
  );
}
