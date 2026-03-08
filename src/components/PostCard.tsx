import Link from 'next/link';
import { Post } from '@/types';
import { Calendar, Clock, Tag } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={post.date} className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} 分钟阅读
          </span>
        </div>
        <Link href={`/posts/${post.slug}`} className="group">
          <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-muted-foreground line-clamp-2">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              {category}
            </Link>
          ))}
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
