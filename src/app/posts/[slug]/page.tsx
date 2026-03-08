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
    <article className="container" style={{ maxWidth: 'var(--content-max-width)', padding: '2rem 1.5rem 4rem' }}>
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center text-sm mb-8 transition-colors hover:text-[var(--accent)] group"
        style={{ color: 'var(--foreground-muted)' }}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        返回首页
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 
          className=""
          style={{ 
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            color: 'var(--foreground)'
          }}
        >
          {post.title}
        </h1>
        
        {/* Meta Info */}
        <div 
          className="flex flex-wrap items-center gap-4 text-sm mb-6"
          style={{ color: 'var(--foreground-muted)' }}
        >
          <time
            dateTime={post.date}
            className="flex items-center gap-1.5"
          >
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime} 分钟阅读
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>

        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium transition-colors hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--background-alt)',
                  color: 'var(--foreground)'
                }}
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto"
            style={{ borderRadius: '8px' }}
          />
        </div>
      )}

      {/* Content */}
      <PostContent content={post.content} />

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-8">
            <h3 
              className="text-sm font-semibold mb-3"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--foreground)'
              }}
            >
              标签
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center rounded-md px-3 py-1 text-sm transition-colors hover:opacity-80"
                  style={{ 
                    backgroundColor: 'var(--background-alt)',
                    color: 'var(--foreground-muted)'
                  }}
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Last Updated */}
        <div 
          className="text-sm"
          style={{ color: 'var(--foreground-muted)' }}
        >
          <p>最后更新：{post.updated || post.date}</p>
        </div>
      </footer>
    </article>
  );
}
