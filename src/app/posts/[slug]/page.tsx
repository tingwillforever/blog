import { getPostBySlug, getAllPosts } from '@/lib/posts';
import PostContent from '@/components/PostContent';
import { Calendar, Clock, User, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-screen-md py-10">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        返回首页
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <time
            dateTime={post.date}
            className="flex items-center gap-1"
          >
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime} 分钟阅读
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>

        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </header>

      {post.coverImage && (
        <div className="mb-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      <PostContent content={post.content} />

      <footer className="mt-16 pt-8 border-t">
        {post.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3">标签</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground">
          <p>最后更新：{post.updated || post.date}</p>
        </div>
      </footer>
    </article>
  );
}
