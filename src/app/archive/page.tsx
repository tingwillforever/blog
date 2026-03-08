import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: '归档',
  description: '按时间归档的所有文章',
};

export default function ArchivePage() {
  const posts = getAllPosts();

  // 按年份和月份分组
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    const month = new Date(post.date).getMonth();
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(post);
    return acc;
  }, {} as Record<number, Record<number, typeof posts>>);

  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);

  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  return (
    <div className="container max-w-screen-md py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">归档</h1>
        <p className="text-xl text-muted-foreground">
          按时间浏览所有文章
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="space-y-12">
          {years.map((year) => (
            <section key={year}>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">{year}</h2>
              </div>

              <div className="space-y-8">
                {Object.keys(postsByYear[year])
                  .map(Number)
                  .sort((a, b) => b - a)
                  .map((month) => (
                    <div key={month} className="space-y-4">
                      <h3 className="text-lg font-semibold text-muted-foreground">
                        {monthNames[month]}
                      </h3>
                      <div className="space-y-4">
                        {postsByYear[year][month].map((post) => (
                          <Link
                            key={post.slug}
                            href={`/posts/${post.slug}`}
                            className="group block"
                          >
                            <div className="flex items-start justify-between gap-4 py-2 border-b last:border-0 hover:bg-accent/50 -mx-2 px-2 rounded transition-colors">
                              <div>
                                <h4 className="font-medium group-hover:text-primary transition-colors">
                                  {post.title}
                                </h4>
                                <p className="text-sm text-muted-foreground line-clamp-1">
                                  {post.description}
                                </p>
                              </div>
                              <time
                                dateTime={post.date}
                                className="text-sm text-muted-foreground whitespace-nowrap"
                              >
                                {new Date(post.date).toLocaleDateString('zh-CN', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </time>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">还没有文章</p>
        </div>
      )}
    </div>
  );
}
