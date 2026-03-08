import { Github, Twitter, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: '关于',
  description: '关于博主和这个博客',
};

export default function AboutPage() {
  return (
    <div className="container max-w-screen-md py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">关于我</h1>
        <p className="text-xl text-muted-foreground">
          你好，欢迎来到我的个人博客！
        </p>
      </header>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">👋 我是谁</h2>
          <p className="leading-7 mb-4">
            我是一名热爱技术的开发者，喜欢探索新技术、分享学习心得。
            这个博客是我记录和分享的地方，希望能对你有所帮助。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📝 博客初衷</h2>
          <p className="leading-7 mb-4">
            创建这个博客的初衷很简单：
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>记录学习历程，好记性不如烂笔头</li>
            <li>分享知识和经验，帮助他人也巩固自己</li>
            <li>建立个人品牌，展示技术能力</li>
            <li>留下思考的痕迹，见证成长</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🛠️ 技术栈</h2>
          <p className="leading-7 mb-4">这个博客使用以下技术构建：</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li><strong>Next.js 16</strong> - React 全栈框架</li>
            <li><strong>Tailwind CSS</strong> - 原子化 CSS</li>
            <li><strong>TypeScript</strong> - 类型安全</li>
            <li><strong>Markdown</strong> - 内容编写</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">📬 联系我</h2>
          <p className="leading-7 mb-4">
            欢迎与我交流，可以通过以下方式联系我：
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">💡 其他</h2>
          <p className="leading-7 mb-4">
            博客内容均为个人学习总结，如有错误欢迎指正。
            所有文章采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-primary hover:underline">CC BY-NC-SA 4.0</a> 许可协议。
          </p>
        </section>
      </div>
    </div>
  );
}
