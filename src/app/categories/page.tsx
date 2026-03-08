import { getCategories } from '@/lib/posts';
import Link from 'next/link';
import { FolderOpen } from 'lucide-react';

export const metadata = {
  title: '分类',
  description: '浏览所有文章分类',
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="container max-w-screen-md py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">分类</h1>
        <p className="text-xl text-muted-foreground">
          按分类浏览文章
        </p>
      </header>

      {categories.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex items-center justify-between p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FolderOpen className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <h2 className="font-semibold text-lg">{category.name}</h2>
                  {category.description && (
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {category.count} 篇
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">还没有分类</p>
        </div>
      )}
    </div>
  );
}
