'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Github, Rss } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
              我的博客
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              首页
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              分类
            </Link>
            <Link
              href="/tags"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              标签
            </Link>
            <Link
              href="/archive"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              归档
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              关于
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--background-alt)] transition-colors"
                aria-label="切换主题"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" style={{ color: 'var(--foreground)' }} />
                ) : (
                  <Moon className="h-4 w-4" style={{ color: 'var(--foreground)' }} />
                )}
              </button>
            )}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--background-alt)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" style={{ color: 'var(--foreground)' }} />
            </a>
            <a
              href="/feed.xml"
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--background-alt)] transition-colors"
              aria-label="RSS"
            >
              <Rss className="h-4 w-4" style={{ color: 'var(--foreground)' }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
