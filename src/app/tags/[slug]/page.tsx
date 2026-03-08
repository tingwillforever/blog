import { getPostsByTag, getTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { ChevronLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = getTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params;
  const tags = getTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    return {
      title: '标签未找到',
    };
  }

  return {
    title: `${tag.name} - 标签`,
    description: `浏览 "${tag.name}" 标签下的所有文章`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const posts = getPostsByTag(slug);
  const tags = getTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    notFound();
  }

  return (
    <div className="container max-w-screen-md py-10">
      <Link
        href="/tags"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        返回标签列表
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Tag className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">{tag.name}</h1>
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
          <p className="text-muted-foreground">该标签下还没有文章</p>
        </div>
      )}
    </div>
  );
}
