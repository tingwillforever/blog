'use client';

import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container max-w-screen-md py-20">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
        <div className="mt-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            页面未找到
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            抱歉，你访问的页面不存在或已被移除。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="h-4 w-4" />
            返回首页
          </Link>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border bg-card font-medium hover:bg-accent transition-colors"
          >
            <Search className="h-4 w-4" />
            浏览归档
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">
            或者，你可以
            <button
              onClick={() => window.history.back()}
              className="ml-1 text-primary hover:underline font-medium"
            >
              返回上一页
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
