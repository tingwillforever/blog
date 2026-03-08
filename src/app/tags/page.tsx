import { getTags } from '@/lib/posts';
import Link from 'next/link';
import { Tag } from 'lucide-react';

export const metadata = {
  title: '标签',
  description: '浏览所有文章标签',
};

export default function TagsPage() {
  const tags = getTags();

  return (
    <div className="container max-w-screen-md py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">标签</h1>
        <p className="text-xl text-muted-foreground">
          按标签浏览文章
        </p>
      </header>

      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/tags/${tag.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 hover:bg-accent/50 hover:border-primary/50 transition-colors"
            >
              <Tag className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-medium">{tag.name}</span>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {tag.count}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Tag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">还没有标签</p>
        </div>
      )}
    </div>
  );
}
