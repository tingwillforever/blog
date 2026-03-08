import Link from 'next/link';
import { Post } from '@/types';
import { Calendar, Clock, Tag } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col space-y-3 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
      {/* Meta info */}
      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--foreground-muted)' }}>
        <time dateTime={post.date} className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(post.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readTime} 分钟阅读
        </span>
      </div>

      {/* Title */}
      <Link href={`/posts/${post.slug}`} className="group">
        <h2 
          className="text-2xl font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
          style={{ color: 'var(--foreground)' }}
        >
          {post.title}
        </h2>
      </Link>

      {/* Description */}
      <p 
        className="text-base line-clamp-2 leading-relaxed"
        style={{ color: 'var(--foreground-muted)' }}
      >
        {post.description}
      </p>

      {/* Categories and Tags */}
      <div className="flex flex-wrap items-center gap-2">
        {post.categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-colors hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--background-alt)',
              color: 'var(--foreground)'
            }}
          >
            {category}
          </Link>
        ))}
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: 'var(--foreground-muted)' }}
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
