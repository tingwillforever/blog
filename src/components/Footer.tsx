import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
              © {new Date().getFullYear()} 我的博客。All rights reserved.
            </p>
            <p className="text-xs" style={{ color: 'var(--foreground-muted)' }}>
              用 Next.js 和 Tailwind CSS 构建
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              关于
            </Link>
            <Link
              href="/feed.xml"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              RSS
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
