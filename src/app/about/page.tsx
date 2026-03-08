import { Github, Twitter, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: '关于',
  description: '关于博主和这个博客',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: 'var(--content-max-width)', padding: '3rem 1.5rem 4rem' }}>
      {/* Header */}
      <header className="mb-12">
        <h1 
          className=""
          style={{ 
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '1rem',
            color: 'var(--foreground)'
          }}
        >
          关于我
        </h1>
        <p 
          className=""
          style={{ 
            fontSize: '1.25rem',
            color: 'var(--foreground-muted)',
            lineHeight: '1.6'
          }}
        >
          你好，欢迎来到我的个人博客！
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12">
        {/* Who Am I */}
        <section>
          <h2 
            className=""
            style={{ 
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--foreground)'
            }}
          >
            👋 我是谁
          </h2>
          <p 
            className=""
            style={{ 
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem',
              color: 'var(--foreground)'
            }}
          >
            我是一名热爱技术的开发者，喜欢探索新技术、分享学习心得。
            这个博客是我记录和分享的地方，希望能对你有所帮助。
          </p>
        </section>

        {/* Why This Blog */}
        <section>
          <h2 
            className=""
            style={{ 
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--foreground)'
            }}
          >
            📝 博客初衷
          </h2>
          <p 
            className=""
            style={{ 
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem',
              color: 'var(--foreground)'
            }}
          >
            创建这个博客的初衷很简单：
          </p>
          <ul 
            className=""
            style={{ 
              listStyle: 'disc',
              paddingLeft: '1.5rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem'
            }}
          >
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>记录学习历程，好记性不如烂笔头</li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>分享知识和经验，帮助他人也巩固自己</li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>建立个人品牌，展示技术能力</li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>留下思考的痕迹，见证成长</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 
            className=""
            style={{ 
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--foreground)'
            }}
          >
            🛠️ 技术栈
          </h2>
          <p 
            className=""
            style={{ 
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem',
              color: 'var(--foreground)'
            }}
          >
            这个博客使用以下技术构建：
          </p>
          <ul 
            className=""
            style={{ 
              listStyle: 'disc',
              paddingLeft: '1.5rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem'
            }}
          >
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>
              <strong>Next.js 16</strong> - React 全栈框架
            </li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>
              <strong>Tailwind CSS</strong> - 原子化 CSS
            </li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>
              <strong>TypeScript</strong> - 类型安全
            </li>
            <li style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>
              <strong>Markdown</strong> - 内容编写
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 
            className=""
            style={{ 
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--foreground)'
            }}
          >
            📬 联系我
          </h2>
          <p 
            className=""
            style={{ 
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem',
              color: 'var(--foreground)'
            }}
          >
            欢迎与我交流，可以通过以下方式联系我：
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <Github className="h-5 w-5 transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]">GitHub</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <Twitter className="h-5 w-5 transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]">Twitter</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <Mail className="h-5 w-5 transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]">Email</span>
            </a>
          </div>
        </section>

        {/* Other Info */}
        <section>
          <h2 
            className=""
            style={{ 
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--foreground)'
            }}
          >
            💡 其他
          </h2>
          <p 
            className=""
            style={{ 
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '1.25rem',
              color: 'var(--foreground)'
            }}
          >
            博客内容均为个人学习总结，如有错误欢迎指正。
            所有文章采用{' '}
            <a 
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              className="hover:text-[var(--accent-hover)] transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              CC BY-NC-SA 4.0
            </a>{' '}
            许可协议。
          </p>
        </section>
      </div>
    </div>
  );
}
